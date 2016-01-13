Meteor.publish('blogCategories', function(){
	return blogcategories.find()
});
Meteor.publish('blogs', function(){
	return blogs.find()
});
Meteor.publish('comments', function(){
	return comments.find()
});
Meteor.publish('files', function() {
	return Files.find();
});
Meteor.publish('images', function() {
	return Images.find();
});
Meteor.publish('navs', function() {
	return navs.find();
});
Meteor.publish('pages', function(){
	return pages.find()
});
Meteor.publish('portfolioCategories', function(){
	return portfoliocategories.find()
});
Meteor.publish('portfolios', function(){
	return portfolios.find()
});
Meteor.publish('profiles', function(){
	return profiles.find()
});
/*
Meteor.publish('roles', function(){
	return roles.find()
});
*/
Meteor.publish('settings', function(){
	return settings.find()
});
Meteor.publish('slides', function(){
	return slides.find()
});
Meteor.publish('userList', function (){ 
  return Meteor.users.find();
});

