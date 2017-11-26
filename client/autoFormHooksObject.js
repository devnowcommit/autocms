var autoFormHooksObject = {
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    // scroll to top
    // $('html, body').animate({scrollTop: 0}, 600);
    swal({
      title: __("Success"),
      text: __("The action has been completed successfully")+".",
      type: "success",
      confirmButtonText: __("Ok")
    });
  },
  // Called when any submit operation fails
  onError: function(formType, error) {
    swal({
      title: __("Error"),
      text: __("An error occured, please try again")+"!",
      type: "error",
      confirmButtonText: __("Ok")
    });
  } 
};

AutoForm.addHooks(null, autoFormHooksObject);