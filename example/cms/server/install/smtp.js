Meteor.startup(function(){
	process.env.MAIL_URL = 'smtp://username:password@domainname:port/'
});