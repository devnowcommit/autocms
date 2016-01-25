Template.autoCms.events({
  // before remove action for autoTable
  'click .remove' : function(event) {
  	if (confirm('Are you sure to delete?')) {
		  window[collection].remove($(event.target).data('id'));        
		}
  }
});