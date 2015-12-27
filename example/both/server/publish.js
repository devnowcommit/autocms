Meteor.publish('blogs', function(){
	return blogs.find({createdBy: this.userId})
});
Meteor.publish('blogCategories', function(){
	return blogs.find()
});
Meteor.publish('comments', function(){
	return comments.find()
});
Meteor.publish('portfolios', function(){
	return portfolios.find()
});
Meteor.publish('portfolioCategories', function(){
	return portfolios.find()
});
Meteor.publish('images', function() {
	return images.find();
});