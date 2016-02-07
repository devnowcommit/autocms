var autoFormHooksObject = {
  
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
  	if (!_.isUndefined(rules.message)) {
	    if (!_.isUndefined(rules.message.success))
	  		FlashMessages.sendSuccess(rules.message.success, { autoHide: true });
  	}
  },

  // Called when any submit operation fails
  onError: function(formType, error) {
		if (!_.isUndefined(rules.message)) {
			if (!_.isUndefined(rules.message.error))
  			FlashMessages.sendError(rules.message.error, { autoHide: true });
		}
  }
  
};

AutoForm.addHooks(null, autoFormHooksObject);