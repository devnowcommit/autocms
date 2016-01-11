/* When Created */
Template.blogItem.onCreated(function() {
  blog = blogs.findOne(FlowRouter.getParam("id"));
  seo.set({
    title: blog.title
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
	},
}); 
Template.blogItemCategories.helpers({
	'categories' : function() {
	  return blogcategories.find({}, {sort: {name: 1} })
	},
	'title': function () {
	  return this.title;
	},
});
Template.blogItemComments.helpers({
	'comments': function() {
		return comments.find({blog: FlowRouter.getParam("id")}, {sort: {createdAt: -1}, limit: 3});
	},
	'comment': function() {
		return this.comment;
	},
	'createdBy': function() {
		author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author))
			return author.profile.name+' '+author.profile.surname;
		else
			return 'Unknown author';
	},
	'createdAt': function() {
		return formatDate('d.m.Y', new Date(this.createdAt));
	}
});
/* Events */
Template.blogItemComments.events({
  "submit .new-comment": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var comment = event.target.comment.value;
    var time = new Date().getTime();

    // Insert a task into the collection
    comments.insert({
      comment: comment,
      blog: FlowRouter.getParam("id"),
      createdBy: Meteor.userId(),
      createdAt: time
    });

    // Clear form
    event.target.comment.value = "";
  }
});