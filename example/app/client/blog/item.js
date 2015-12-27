/* Helpers */
Template.blogItem.helpers({
	'item' : function() {
	  return blogs.findOne(FlowRouter.getParam("id"));
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
	'createdBy': function () {
		return Meteor.users.findOne(this.createdBy).profile.name;
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
		return comments.find({blog: FlowRouter.getParam("id")}, {sort: {createdAt: -1}});
	},
	'comment': function() {
		return this.comment;
	},
	'createdBy': function() {
		return Meteor.users.findOne(this.createdBy).profile.name;
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