Template.homeSlides.helpers({
	'items' : function() {
	  return slides.find();
	},
	'image': function () {
		return location.origin+'/cfs/files/images/'+ this.image;
	},
});
Template.homeSlides.rendered = function() {
	this.$('.item').first().addClass('active');
}

Template.homePortfolios.helpers({
  'items' : function() {
	  return portfolios.find({}, {sort: {date: -1}, limit: 10 });
	},
	'title': function () {
	  return this.title;
	},
	'description': function () {
	  return this.description;
	},
	'link': function () {
	  return this.link;
	},
	'image1': function () {
		return location.origin+'/cfs/files/images/'+ this.image1;
	},
	'image2': function () {
		return location.origin+'/cfs/files/images/'+ this.image2;
	},
	'image3': function () {
		return location.origin+'/cfs/files/images/'+ this.image3;
	},
	'category': function () {
	  return blogcategories.findOne(this.category);
	}
});

Template.homeBlogs.helpers({
  'items' : function() {
    return blogs.find({}, {sort: {date: -1}, limit: 3 });
  },
  'description': function () {
	  return this.description;
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
});