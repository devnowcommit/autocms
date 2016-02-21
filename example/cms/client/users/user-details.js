Template.userProfileCms.helpers({
	'item': function() {
		return profiles.findOne(FlowRouter.getParam("id"));
	},
	'picture': function() {
		return location.origin+'/cfs/files/images/'+ this.picture;
	}
});
Template.userBlogsCms.helpers({
	'items': function() {
		var profile = profiles.findOne(FlowRouter.getParam("id"));	
		var userId = profile.userId;
		return blogs.find({createdBy: userId});
	},
	'title': function() {
		return this.title;
	},
	'edit': function() {
		return location.origin+'/cms/blogs/item/'+this._id;
	}
});
Template.userCommentsCms.helpers({
	'items': function() {
		var profile = profiles.findOne(FlowRouter.getParam("id"));	
		var userId = profile.userId;
		return comments.find({createdBy: userId});
	},
	'comment': function() {
		return this.comment;
	},
	'blog': function() {
		return blogs.findOne(this.blog);
	},
	'origin': function() {
		return location.origin;
	},
	'edit': function() {
		return location.origin+'/cms/comments/item/'+this._id;
	}
});