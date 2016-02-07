Template.blog.onCreated(function() {
  seo.set({
    title: 'Contact us'
  });
});
/* Helpers */
Template.contact.helpers({
	'item' : function() {
	  return settings.findOne('M3Mv2K9YkzbsY9fbE');
	},
	'email': function() {
		return this.email;
	},
	'address': function() {
		return this.address;
	},
	'phone': function() {
		return this.phone;
	}
}); 