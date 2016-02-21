Template.main.helpers({
	'settings': function() {
	  return settings.findOne('M3Mv2K9YkzbsY9fbE');
	}
}); 
Template.main.events({
	'click .navbar-brand': function() {
	  $('ul.nav.navbar-nav li').removeClass('active');
	}
}); 
Template.appFooter.helpers({
	'settings': function() {
	  return settings.findOne('M3Mv2K9YkzbsY9fbE');
	}
}); 
Template.appFooter.events({
	'click .subscribe': function(event) {
		event.preventDefault();

		newsletter.insert({
      email: $(event.target).prev().val(),
      createdAt: new Date().getTime()
    });

    // Clear form
    $(event.target).prev().val('');
	}
})
