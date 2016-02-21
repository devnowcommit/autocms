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