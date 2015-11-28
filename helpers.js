Template.autoCms.onCreated(function(){
  // global variables & configs for autoCms
  collection = FlowRouter.getParam("collection");
  
  func = FlowRouter.getParam("function");
  
  id = FlowRouter.getParam("id");

  if (!_.isUndefined(rules = window[collection].autoCms))
    rules = window[collection].autoCms;
  else
    rules = window[collection].autoOne;

  // Set default options for Navigation Buttons
  showNavButtons = true;
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
  
  // dataType
  dataType = 'table'
  if (!_.isUndefined(dataType))
    dataType = rules.type;

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
    }

    if (!_.isUndefined(rules.buttons.showNavButtons))
      showNavButtons = rules.buttons.showNavButtons;  
  }
  
  // showNo
  showNo = true; 
  if (!_.isUndefined(rules.showNo))
    showNo = rules.showNo;

  // default width for images
  width = '40';
});
/**
  Defines how autoCms & autoForm will work and returns data 
  into template 
*/
Template.autoCms.helpers({
  // is autoCmsForm will be in use for insert/update, if not return false to list collection
  'autoCmsForm': function() {
    switch(func) {
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
    return showNavButtons;
  },
  'autoCmsNavButtonInsert': function () {
    return '<a class="'+navButtonInsertClass+'" href="'+location.origin+'/cms/'+collection+'/insert" target="_self">'+navButtonInsertLabel+'</a>';
  },
  'autoCmsNavButtonList': function () {
    return '<a class="'+navButtonListClass+'" href="'+location.origin+'/cms/'+collection+'/list" target="_self">'+navButtonListLabel+'</a>';
  },
  'autoCmsActionButtons': function() {
    return showActionButtons;
  },
  'autoCmsNo': function() {
    return showNo;
  },
  // main collection which will be handled in autoCms
  'collection': function() {
  	return collection;
  },
  // fetch data and serve it as wanted
  'data': function() {
  	switch(func) {
  	  case 'list':
  	    return true;
  	    break;
  	  case 'item':
  	    return window[collection].findOne(id);
  	    break;
  	  case 'update':
  	  	return window[collection].findOne(id);
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
  	switch(func) {
  	  case 'list':
  	    return true
  	    break;
  	  case 'item':
  	    return 'edit'+FlowRouter.getParam("collection")+'Form';
  	    break;
  	  case 'update':
  	  	return 'edit'+FlowRouter.getParam("collection")+'Form';
  	  	break;
  	  case 'insert':
  	    return 'insert'+FlowRouter.getParam("collection")+'Form';
  	    break;
  	  default:
  	    return false;
  	}
  },
  // return formType for autoForm
  'formType': function() {
  	switch(func) {
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
  	switch(func) {
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
    if (!_.isUndefined(rules.wrapper.type))
      contentType = rules.wrapper.type;

    if (contentType == 'table')
      return true;
    else
      return false;
  },
  // wrapper element for data
  'wrapperClass': function () {
    try{
      return rules.wrapper.class; 
    } catch(e) {
      return '';
    }
  },
  // title which will be displayed in the body of the page
  'title': function () {
    return rules.title;
  },
  // return only column names from collection.table rule
  'tableHead': function () {
  	// gather column names and push them into keys
    var keys = [];
    for (var key in rules.columns) {
        keys.push(key);
    }
    
    var result = [];
    // foreach keys format key and push them into result
    keys.forEach(function (item, index) {
      result.push(s(item).capitalize().value());
    });

    // push other fields, which is defined in the rule into result
    if (showNo) {
      result.unshift('No');
    }
    if (showActionButtons) {
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
  // condition for remove button in autoform
  'removeButton' : function () {
    switch(func) {
      case 'item':
        return true;
        break;
      default:
      return false;
    }
  },
  // ask again before remove action in autoForm
  'beforeRemove' : function () {
    return function () {
      var doc = window[collection].findOne(id);
      if (confirm('Really delete: "'+ doc.title +'"?')) {
        this.remove();        
      }
    };
  }
});
