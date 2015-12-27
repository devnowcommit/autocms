Template.blog.helpers({
	'items' : function() {
	  return blogs.find();
	},
	'title': function () {
	  return this.title;
	},
	'description': function () {
	  return this.description;
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
	'category': function () {
	  return blogcategories.findOne(this.category);
	},
	'createdBy': function () {
		return Meteor.users.findOne(this.createdBy).profile.name;
	},
}); 
Template.blogCategories.helpers({
	'categories' : function() {
	  return blogcategories.find({}, {sort: {date: -1, name: 1} });
	},
	'title': function () {
	  return this.title;
	},
}); 