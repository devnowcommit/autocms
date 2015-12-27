Template.homeSlides.helpers({
	'slides' : function() {
	  return slides.find();
	},
});

Template.homePortfolios.helpers({
  'portfolios' : function() {
    return portfolios.find({}, {sort: {date: -1}, limit: 10 });
  },
});

Template.homeBlogs.helpers({
  'blogs' : function() {
    return blogs.find({}, {sort: {date: -1}, limit: 3 });
  },
});