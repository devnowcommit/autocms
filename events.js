Template.cmsCollection.events({
  // before remove action for autoTable
  'click .remove' : function() {
  	if (confirm('Are you sure to delete?')) {
		  window[collection].remove($(event.target).data('id'));        
		}
  }
});