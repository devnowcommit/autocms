Template.contact.onCreated(function() {
  seo.set({
    title: 'Contact us'
  });
});
/* Helpers */
Template.contact.helpers({
	'item': function() {
	  return settings.findOne('M3Mv2K9YkzbsY9fbE');
	}
}); 

Template.contact.events({
	'submit form':function(event){
		event.preventDefault();

		var name = event.target.name.value;
		var email = event.target.email.value;
		var subject = event.target.subject.value;
		var message = event.target.message.value;

		console.log(name +' '+email+' '+subject+' '+message);

		/*
		to: to,
    from: from,
    subject: subject,
    text: text
		*/

		Meteor.call('sendEmail',
      'info@guncebektas.com',
      email,
      subject,
      message);
	}
});