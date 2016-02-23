var subscriptionComments = Meteor.subscribeWithPagination('comments', 4);

Template.blogItemComments.helpers({
	'comments': function() {
		return comments.sorted(subscriptionComments.loaded(), FlowRouter.getParam("id"), 0);
	},
	'childComments': function() {
		return comments.sorted(subscriptionComments.loaded(), FlowRouter.getParam("id"), this._id);
	},
	'comment': function() {
		return this.comment;
	},
	'isParent': function() {
		if (_.isUndefined(this.parent) || this.parent == 0) {
			return true;
		} else {
			return false;
		}
	},
	'canDelete': function() {
		if (this.createdBy == Meteor.userId() || Roles.userIsInRole(Meteor.userId(), 'admin', 'default-group')) {
			return true;
		} else {
			return false;
		}
	},
	'createdBy': function() {
		var author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author))
			return author.profile.name+' '+author.profile.surname;
		else
			return 'Unknown author';
	},
	createdByAvatar: function() {
		var author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author.profile.picture))
			return location.origin+'/cfs/files/images/'+ author.profile.picture;
		else
			return false;
	},
	'createdAt': function() {
		return formatDate('d.m.Y H:s', new Date(this.createdAt));
	},
	'hasData': function() {
		return comments.find({blog: FlowRouter.getParam("id")}).count();
	},
	'loading': function() {
    return !subscriptionComments.ready();
  },
  'hasMore': function() {
    return comments.sorted(subscriptionComments.loaded(), FlowRouter.getParam("id")).count() == subscriptionComments.limit();
  }
});
/* Events */
Template.blogItemComments.events({
  'submit .new-comment': function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var comment = event.target.comment.value;
    var time = new Date().getTime();

    // Insert a comment into the collection
    comments.insert({
      comment: comment,
      blog: FlowRouter.getParam("id"),
      parent: 0,
      createdBy: Meteor.userId(),
      createdAt: time
    });

    // Clear form
    event.target.comment.value = "";
  },
  'click .load-more': function (event) {
    event.preventDefault();

    subscriptionComments.loadNextPage();
  },
  'click .hide-more': function (event) {
    event.preventDefault();

    subscriptionComments.reset();
  },
  'click i.fa-warning': function(event) {
  	event.preventDefault();

  	swal(
  		{
				title: "Are you sure?",
				text: "You will not be able to recover this action",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, report it!',
				closeOnConfirm: false
			},
			function(){
				comments.update($(event.target).data('id'), {$inc: {reported: 1}} );
				swal("Thank you!", "The item has beed reported!", "success");
			}
		);
  },
  'click i.fa-reply': function (event) {
  	event.preventDefault();

  	var comment_id = $(event.target).data('id');
  	console.log('reply '+ comment_id);

  	$('.reply-wrapper').html('');
  	$('.reply-wrapper-'+comment_id).html('<form class="form-horizontal reply-comment" data-id="'+comment_id+'"><div class="form-group"><textarea class="form-control reply-'+comment_id+'"></textarea></div><div class="form-group text-right pull-right"><button type="submit" class="btn">Reply</button></div></form>');
	
  	$('html, body').animate({scrollTop: $('.reply-wrapper-'+comment_id).offset().top - 200}, 600);
	},
	'click i.fa-trash': function(event) {
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
				comments.remove($(event.target).data('id'));
				swal("Deleted!", "The item has beed deleted!", "success");
			}
		);
  },
	'submit .reply-comment': function (event) {
		event.preventDefault();

		var commentId = $(event.target).data('id');
		var reply = $('.reply-'+commentId).val();
		var time = new Date().getTime();

		comments.insert({
      comment: reply,
      blog: FlowRouter.getParam("id"),
      parent: commentId,
      createdBy: Meteor.userId(),
      createdAt: time
    });

    $('.reply-wrapper').html('');
	}
});