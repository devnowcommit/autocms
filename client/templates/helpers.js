Template.autoCms.helpers({
  // is autoCmsForm will be in use for insert/update, if not return false to list collection
  'autoCmsForm': function() {
    let cms = Session.get('cms');
    switch(cms.methods) {
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
    let cms = Session.get('cms');
    return cms.rules.buttons.showNavButtons;
  },
  'autoCmsNavButtonInsert': function () {
    let cms = Session.get('cms');
    let btn = cms.rules.buttons;
    return '<a class="'+btn.navButtonInsert.class+'" href="'+location.origin+'/cms/'+cms.collection+'/insert">'+btn.navButtonInsert.label+'</a>';
  },
  'autoCmsNavButtonList': function () {
    let cms = Session.get('cms');
    let btn = cms.rules.buttons;
    return '<a class="'+btn.navButtonList.class+'" href="'+location.origin+'/cms/'+cms.collection+'/list">'+btn.navButtonList.label+'</a>';
  },
  'autoCmsActionButtons': function() {
    return Session.get('cms').rules.buttons.showNavButtons;
  },
  'autoCmsNo': function() {
    return Session.get('cms').showNo;
  },
  // main collection which will be handled in autoCms
  'collection': function() {
    return Session.get('cms').collection;
  },
  // fetch data and serve it as wanted
  'data': function() {
    let cms = Session.get('cms');
    switch(cms.methods) {
      case 'list':
        return true;
        break;
      case 'item':
        return window[cms.collection].findOne(cms.id);
        break;
      case 'update':
        return window[cms.collection].findOne(cms.id);
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
    let cms = Session.get('cms');
    switch(cms.methods) {
      case 'list':
        return true
        break;
      case 'item':
        return 'edit'+cms.collection+'Form';
        break;
      case 'update':
        return 'edit'+cms.collection+'Form';
        break;
      case 'insert':
        return 'insert'+cms.collection+'Form';
        break;
      default:
        return false;
    }
  },
  // return formType for autoForm
  'formType': function() {
    let cms = Session.get('cms');
    switch(cms.methods) {
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
    let cms = Session.get('cms');
    switch(cms.methods) {
      case 'list':
        return true
        break;
      case 'item':
        return __('Update');
        break;
      case 'update':
        return __('Update');
        break;
      case 'insert':
        return __('Save');
        break;
      default:
        return false;
    } 
  },
  // wrapper type defines, how to display data set
  'wrapperType': function () {
    let cms = Session.get('cms');
    if (!_.isUndefined(cms.rules.wrapper.type))
      contentType = cms.rules.wrapper.type;

    if (contentType == 'table')
      return true;
    else
      return false;
  },
  // wrapper element for data
  'wrapperClass': function () {
    let cms = Session.get('cms');
    try{
      return cms.methods.wrapper.class; 
    } catch(e) {
      return '';
    }
  },
  // title which will be displayed in the body of the page
  'title': function () {
    let cms = Session.get('cms');
    return cms.rules.title;
  },
  // footer note which be displated at the end of table
  'titleNote': function () {
    let cms = Session.get('cms');
    return cms.rules.titleNote;
  },
  // footer note which be displated at the end of table
  'footerNote': function () {
    let cms = Session.get('cms');
    return cms.rules.footerNote;
  },
  // return only column names from collection.table rule
  'tableHead': function () {
    let cms = Session.get('cms');
    // gather column names and push them into keys
    var keys = [];
    for (var key in cms.rules.columns) {
        keys.push(key);
    }
    
    var result = [];
    // foreach keys format key and push them into result
    keys.forEach(function (item, index) {
      if (!_.isUndefined(cms.rules.columns[item].label))
        item = cms.rules.columns[item].label;

      result.push(s(item).capitalize().value());
    });

    // push other fields, which is defined in the rule into result
    if (cms.rules.showNo) {
      result.unshift(__('Number'));
    }
    if (cms.rules.buttons.showActionButtons) {
      result.push(__('Actions'));
    }
    // return result
   return result;
  },
  // allClass
  'allClass': function (c, index) {
    let cms = Session.get('cms');
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allData': function() {
    let cms = Session.get('cms');
    return autoCmsObject.formatRowData();
  },
  'allDataId': function (c, index) {
    let cms = Session.get('cms');
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allDataColumn': function (c, index) {
    let cms = Session.get('cms');
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      return res[index];
    } else {
      return '';
    }
  },
  'allDataEditable': function (c, index) {
    let cms = Session.get('cms');
    if (!_.isUndefined(c)) {
      var res = c.toString().split(",");
      if (res[index] === "true")
        return true;
    }
  },
  // condition for remove button in autoform
  'removeButton' : function () {
    var cms = Session.get('cms');
    console.log(cms);
    switch(cms.methods) {
      case 'item':
        if (cms.rules.buttons.delete.auth)
          return true;
        break;
      default:
      return false;
    }
  },
  // ask again before remove action in autoForm
  'beforeRemove' : function () {
    let cms = Session.get('cms');
    return function () {
      var doc = window[cms.collection].findOne(cms.id);
      if (confirm('Really delete: "'+ doc.title +'"?')) {
        this.remove();        
      }
    };
  },
  // helper function for localization
  _: function (key) {
    return __(key);
  }
});

Template.filePreview.helpers({
  // helper function for localization
  _: function (key) {
    return __(key);
  }
});

Template.fileButtonSelect.helpers({
  // helper function for localization
  _: function (key) {
    return __(key);
  }
});

Template.fileButtonRemove.helpers({
  // helper function for localization
  _: function (key) {
    return __(key);
  }
});