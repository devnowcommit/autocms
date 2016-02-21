/* When Created */
Template.portfolios.onCreated(function() {
  seo.set({
    title: 'Our portfolio'
  });
});
Template.portfolios.helpers({
	'items' : function() {
	  return portfolios.find();
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
	  return this.category;
	},
	'createdBy': function () {
		return Meteor.users.findOne(this.createdBy).profile.name;
	},
}); 
Template.portfolioCategories.helpers({
	'categories' : function() {
	  return portfoliocategories.find({}, {sort: {date: -1, name: 1} });
	},
	'title': function () {
	  return this.title;
	},
});
Template.portfolioCategories.events({
	'click a': function(event) {
		event.preventDefault();

		if ($(event.target).data('category') == 'all') {
			$('article').show();
			$('*[data-category="all"').addClass('hidden');
		} else {
			$('article').hide();
			$('.'+$(event.target).data('category')).show();
			$('*[data-category="all"').removeClass('hidden');
		}
	}
});