Template.autoCms.events({
  // before remove action for autoTable
  'click .remove': function(e) {
    let cms = Session.get('cms');
    
    swal({
			title: __("Warning"),
			text: __("You can not undo this action, are you sure to continue")+"?",
			type: 'warning',
			showCancelButton: true,
      cancelButtonText: __("No"),
			confirmButtonText: __("Yes"),
			closeOnConfirm: true
		}, function(){
      //run hook
      if (!_.isUndefined(eval(cms.collection).autoCms.buttons.delete.hook))
			  eval(cms.collection).autoCms.buttons.delete.hook($(e.target).data('id'));

      Meteor.call('removeItem', 
        // collection name
        cms.collection, 
        // id to remove
        $(e.target).data('id')
      );
      
      swal("Deleted!", "The item has beed deleted!", "success");
		});
  },
  'keypress .editable': function(e) {
    let cms = Session.get('cms');

  	// Press Enter
  	if (e.keyCode == 13) {
  		Meteor.call('updateItem', 
        // collection name
        cms.collection, 
        // id to update
        $(e.target).data('id'),
        // column to set in modifier 
        $(e.target).data('column'), 
        // value to update in modifier
        $(e.target).val()
      );
  	}
  }
});