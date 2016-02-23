/* When Created */
Template.blogItem.onCreated(function() {
  var self = this;

  self.autorun(function () {
    self.subscribe("blogs", function(){
      //Tracker.autorun(function(){
        var blog = blogs.findOne(FlowRouter.getParam("id"));
        
        seo.set({
			    title: blog.title
			  });

      //});
    });
  });
});

/* Helpers */
Template.blogItem.helpers({
	'item' : function() {
		return blogs.findOne(FlowRouter.getParam("id"));
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
	'file': function () {
		if (!_.isUndefined(this.file))
			return '<p><strong>File: </strong><a href="'+ location.origin+'/cfs/files/files/'+ this.file +'">Download</a></p>';
		else
			return false;
	},
	'category': function () {
		return blogcategories.findOne(this.category).title;
	},
	'createdBy': function () {
		author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author))
			return author.profile.name+' '+author.profile.surname;
		else
			return 'Unknown author';
	}
}); 

Template.blogItemLike.helpers({ 
	'likeAmount': function () {
		item = blogs.findOne(FlowRouter.getParam("id"));
		return item.like;
	},
	'isLiked': function() {
		return bloglikes.find({ blog: FlowRouter.getParam("id"), user: Meteor.userId(), like: 1 }).count();
	}
});
Template.blogItemLike.events({
	'click .like-up': function (event) {
		console.log('like');
		
		isLiked = bloglikes.find({ blog: FlowRouter.getParam("id"), user: Meteor.userId(), like: 0 }).fetch();
		if (!_.isUndefined(isLiked)) {
			bloglikes.insert({blog: FlowRouter.getParam("id"), user: Meteor.userId(), like: 1});
		} else {
			bloglikes.update(isLiked[0]._id, {$set: {like: 1} });
		}	
	
		// admin boost
		if (Roles.userIsInRole(Meteor.userId(), 'admin', 'default-group'))
			blogs.update(FlowRouter.getParam("id"), {$inc: {like: 15}} );
		else
			blogs.update(FlowRouter.getParam("id"), {$inc: {like: 1}} );
		
	},
	'click .like-down': function (event) {
		console.log('dislike');
		
		isLiked = bloglikes.find({ blog: FlowRouter.getParam("id"), user: Meteor.userId(), like: 1 }).fetch();
		bloglikes.update(isLiked[0]._id, {$set: {like: 0} });

		// admin boost
		if (Roles.userIsInRole(Meteor.userId(), 'admin', 'default-group'))
			blogs.update(FlowRouter.getParam("id"), {$inc: {like: -15}} );
		else
			blogs.update(FlowRouter.getParam("id"), {$inc: {like: -1}} );	
	}
});

/* Edit button */
Template.blogEdit.helpers({
	'host' : function() {
		return location.origin;
	},
	'item' : function() {
		return FlowRouter.getParam("id");
	}
});
Template.blogEdit.events({
	"click #cms-item-delete": function (event) {
		// Prevent default browser form submit
    event.preventDefault();

    swal(
  		{
				title: "Are you sure?",
				text: "You will not be able to recover this action",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, delete it!',
				closeOnConfirm: false
			},
			function(){
				blogs.remove($(event.target).data('id'));
				//comments.remove({ blog : $(event.target).data('id') });
				swal("Deleted!", "The item has beed deleted!", "success");
				FlowRouter.go('blog');
			}
		);
	}
});