/* When Created */
Template.blog.onCreated(function() {
  seo.set({
    title: 'It\'s my blog'
  });
});
/* Helpers */
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
		author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author))
			return author.profile.name+' '+author.profile.surname;
		else
			return 'Unknown author';
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