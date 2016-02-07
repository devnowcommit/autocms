Template.autoCms.events({
  // before remove action for autoTable
  'click .remove': function(event) {
  	swal(
  		{
				title: 'Are you sure?',
				text: 'You will not be able to recover this action',
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, delete it!',
				closeOnConfirm: false
			},
			function(){
				window[collection].remove($(event.target).data('id'));
				swal("Deleted!", "The item has beed deleted!", "success");
			}
		);
  },
  'keypress .editable': function(event) {
  	// Press Enter
  	if (event.keyCode == 13) {
  		
	  	var setModifier = { $set: {} };
			setModifier.$set[$(event.target).data('column')] = $(event.target).val();

	  	window[collection].update($(event.target).data('id'), setModifier);

  	} else {
  		console.log('Press enter to update focused field');
  	}
  }
});