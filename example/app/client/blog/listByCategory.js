/* When Created */
Template.blogByCategory.onCreated(function() {
  seo.set({
    title: 'It\'s my blog'
  });
});
/* Helpers */
Template.blogByCategory.helpers({
	'items' : function() {
	  return blogs.find({category: FlowRouter.getParam("id")});
	},
	'title': function () {
	  return this.title;
	},
	'description': function () {
	  return this.description;
	},
	'likeAmount': function () {
	  return this.like;
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
	'slug': function() {
		return slug(this.title);
	},
}); 