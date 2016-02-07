Template.autoCms.onCreated(function(){
  // global variables & configs for autoCms
  try {  
    Tracker.autorun(function(){
      collection = FlowRouter.getParam("collection");
      func = FlowRouter.getParam("function");
      id = FlowRouter.getParam("id");
      Session.set('autocms-collection', collection);
      Session.set('autocms-func', func);
      Session.set('autocms-id', id);
      
      //console.log(collection);
    
      // Define rule sets
      if (!_.isUndefined(FlowRouter.getParam("collection"))) {
        if (!_.isUndefined(window[collection].autoCms)) {
          rules = window[collection].autoCms;
        } else {
          rules = window[collection].autoOne;
        }
        Session.set('autocms-rules', rules);
      }
      
      // Set default options for Navigation Buttons
      showNavButtons = true;
      Session.set('autocms-show-nav-buttons', showNavButtons);

      // navButtonInsert
      try {
        navButtonInsertClass = rules.buttons.navButtonInsert.class;
      } catch(e) {
        navButtonInsertClass = '';
      }
      try {
        navButtonInsertLabel = rules.buttons.navButtonInsert.label;
      } catch(e) {
        navButtonInsertLabel = 'Insert';
      }
      Session.set('autocms-nav-insert-class', navButtonInsertClass);
      Session.set('autocms-nav-insert-label', navButtonInsertLabel);   

      // navButtonList
      try {
        navButtonListClass = rules.buttons.navButtonList.class;
      } catch(e) {
        navButtonListClass = '';
      }
      try {
        navButtonListLabel = rules.buttons.navButtonList.label;
      } catch(e) {
        navButtonListLabel = 'List';
      }
      Session.set('autocms-nav-list-class', navButtonListClass);
      Session.set('autocms-nav-list-label', navButtonListLabel);

      // dataType
      if (_.isUndefined(dataType))
        dataType = 'table'
      else
        dataType = rules.type;
      Session.set('autocms-data-type', dataType);

      // Set default options for Action buttons which are in the last td of every tr
      showActionButtons = true; 
      if (!_.isUndefined(rules.buttons)) {
         
        if (!_.isUndefined(showActionButtons)) {
          showActionButtons = rules.buttons.showActionButtons;
          
          if (typeof rules.buttons.edit.auth() != undefined && typeof rules.buttons.delete.auth() != undefined) {
            if (rules.buttons.edit.auth() == true && rules.buttons.delete.auth() == true)
              showActionButtons = true;
            else if (rules.buttons.edit.auth() == false && rules.buttons.delete.auth() == false)
              showActionButtons = false;   
          }

          Session.set('autocms-show-action-buttons', showActionButtons);
          
          //console.log(rules.buttons);

          if (!_.isUndefined(rules.buttons.extra)) {
            Session.set('autocms-buttons-extra-auth', rules.buttons.extra.auth());

            if (!_.isUndefined(rules.buttons.extra.label)) {
              Session.set('autocms-buttons-extra-label', rules.buttons.extra.label);
            } else {
              Session.set('autocms-buttons-extra-label', '');
            }
            if (!_.isUndefined(rules.buttons.extra.class)) {
              Session.set('autocms-buttons-extra-class', rules.buttons.extra.class);
            } else {
              Session.set('autocms-buttons-extra-class', '');
            }

            Session.set('autocms-buttons-extra-href', rules.buttons.extra.href());
          } else {
            Session.set('autocms-buttons-extra-auth', false);
          }

          if (!_.isUndefined(rules.buttons.edit)) {
            Session.set('autocms-buttons-edit-auth', rules.buttons.edit.auth());
            if (!_.isUndefined(rules.buttons.edit.label)) {
              Session.set('autocms-buttons-edit-label', rules.buttons.edit.label);
            } else {
              Session.set('autocms-buttons-edit-label', '');
            }
            if (!_.isUndefined(rules.buttons.edit.class)) {
              Session.set('autocms-buttons-edit-class', rules.buttons.edit.class);
            } else {
              Session.set('autocms-buttons-edit-class', '');
            }
          } else {
            Session.set('autocms-buttons-edit-auth', false);
          }

          if (!_.isUndefined(rules.buttons.delete)) {
            Session.set('autocms-buttons-delete-auth', rules.buttons.delete.auth());
            if (!_.isUndefined(rules.buttons.delete.label)) {
              Session.set('autocms-buttons-delete-label', rules.buttons.delete.label);
            } else {
              Session.set('autocms-buttons-delete-label', '');
            }
            if (!_.isUndefined(rules.buttons.delete.class)) {
              Session.set('autocms-buttons-delete-class', rules.buttons.delete.class);
            } else {
              Session.set('autocms-buttons-delete-class', '');
            }
          } else {
            Session.set('autocms-buttons-delete-auth', false);
          }
        }
        

        if (!_.isUndefined(rules.buttons.showNavButtons)) {
          showNavButtons = rules.buttons.showNavButtons;  
          Session.set('autocms-show-nav-buttons', showNavButtons);
        }
      }
      
      // showNo
      showNo = true; 
      if (!_.isUndefined(rules.showNo)) {
        showNo = rules.showNo;
      }
      Session.set('autocms-show-no', showNo);
      
      // Set a message to the top
      FlashMessages.clear();
      /*
      if (!_.isUndefined(rules.message)) {
        if (!_.isUndefined(rules.message.list) && func == 'list') {
          FlashMessages.sendInfo(rules.message.list, { autoHide: true });
        }
      }
      */
    });
  } catch(e){
    //console.log(e); //Log the error
  }
});

/**
  Defines how autoCms & autoForm will work and returns data 
  into template 
*/
Template.autoCms.helpers({
  // is autoCmsForm will be in use for insert/update, if not return false to list collection
  'autoCmsForm': function() {
    switch(Session.get('autocms-func')) {
  	  case 'list':
  	    return false;
  	    break;
  	  case 'item':
  	    return true;
  	    break;
  	  case 'update':
  	  	return true;
  	  	break;
  	  case 'insert':
  	  	return true;
  	  	break;
  	  default:
  	    return false;
  	}
  },
  'autoCmsNavButtons': function() {
    return Session.get('autocms-show-nav-buttons');
  },
  'autoCmsNavButtonInsert': function () {
    return '<a class="'+Session.get('autocms-nav-insert-class')+'" href="'+location.origin+'/cms/'+Session.get('autocms-collection')+'/insert">'+Session.get('autocms-nav-insert-label')+'</a>';
  },
  'autoCmsNavButtonList': function () {
    return '<a class="'+Session.get('autocms-nav-list-class')+'" href="'+location.origin+'/cms/'+Session.get('autocms-collection')+'/list">'+Session.get('autocms-nav-list-label')+'</a>';
  },
  'autoCmsActionButtons': function() {
    return Session.get('autocms-show-action-buttons');
  },
  'autoCmsNo': function() {
    return Session.get('autocms-show-no');
  },
  // main collection which will be handled in autoCms
  'collection': function() {
    return Session.get('autocms-collection');
  },
  // fetch data and serve it as wanted
  'data': function() {
    switch((Session.get('autocms-func'))) {
  	  case 'list':
  	    return true;
  	    break;
  	  case 'item':
  	    return window[Session.get('autocms-collection')].findOne(id);
  	    break;
  	  case 'update':
  	  	return window[Session.get('autocms-collection')].findOne(id);
  	  	break;
  	  case 'insert':
  	  	return true;
  	  	break;
  	  default:
  	    return false;
  	}
  },
  // return formId for autoForm
  'formId': function () {
  	switch((Session.get('autocms-func'))) {
  	  case 'list':
  	    return true
  	    break;
  	  case 'item':
  	    return 'edit'+Session.get('autocms-collection')+'Form';
  	    break;
  	  case 'update':
  	  	return 'edit'+Session.get('autocms-collection')+'Form';
  	  	break;
  	  case 'insert':
  	    return 'insert'+Session.get('autocms-collection')+'Form';
  	    break;
  	  default:
  	    return false;
  	}
  },
  // return formType for autoForm
  'formType': function() {
  	switch((Session.get('autocms-func'))) {
  	  case 'list':
  	    return true
  	    break;
  	  case 'item':
  	    return 'update';
  	    break;
  	  case 'update':
  	  	return 'update';
  	  	break;
  	  case 'insert':
  	    return 'insert';
  	    break;
  	  default:
  	    return false;
  	}
  },
  // return the text of button for autoForm
  'formButton': function() {
  	switch((Session.get('autocms-func'))) {
  	  case 'list':
  	    return true
  	    break;
  	  case 'item':
  	    return 'Update';
  	    break;
  	  case 'update':
  	  	return 'Update';
  	  	break;
  	  case 'insert':
  	    return 'Submit';
  	    break;
  	  default:
  	    return false;
    }	
  },
  // wrapper type defines, how to display data set
  'wrapperType': function () {
    if (!_.isUndefined(Session.get('autocms-rules').wrapper.type))
      contentType = Session.get('autocms-rules').wrapper.type;

    if (contentType == 'table')
      return true;
    else
      return false;
  },
  // wrapper element for data
  'wrapperClass': function () {
    try{
      return Session.get('autocms-func').wrapper.class; 
    } catch(e) {
      return '';
    }
  },
  // title which will be displayed in the body of the page
  'title': function () {
    return Session.get('autocms-rules').title;
  },
  // return only column names from collection.table rule
  'tableHead': function () {
  	// gather column names and push them into keys
    var keys = [];
    for (var key in Session.get('autocms-rules').columns) {
        keys.push(key);
    }
    
    var result = [];
    // foreach keys format key and push them into result
    keys.forEach(function (item, index) {
      if (!_.isUndefined(Session.get('autocms-rules').columns[item].label))
        item = Session.get('autocms-rules').columns[item].label;

      result.push(s(item).capitalize().value());
    });

    // push other fields, which is defined in the rule into result
    if (Session.get('autocms-show-no')) {
      result.unshift('No');
    }
    if (Session.get('autocms-show-action-buttons')) {
      result.push('Actions');
    }
    // return result
	 return result;
  },
  // allClass
  'allClass': function (c, index) {
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allData': function() {
    return autoCmsObject.formatRowData();
  },
  'allDataId': function (c, index) {
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allDataColumn': function (c, index) {
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allDataEditable': function (c, index) {
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      if (res[index] === "true")
        return true;
    }
  },
  // condition for remove button in autoform
  'removeButton' : function () {
    switch(func) {
      case 'item':
        if (Session.set('autocms-buttons-delete-auth'))
          return true;
        break;
      default:
      return false;
    }
  },
  // ask again before remove action in autoForm
  'beforeRemove' : function () {
    return function () {
      var doc = window[Session.get('autocms-collection')].findOne(id);
      if (confirm('Really delete: "'+ doc.title +'"?')) {
        this.remove();        
      }
    };
  }
});
