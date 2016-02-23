//First of all create Mongo collections
navs = new Mongo.Collection('navs');
// Attach schema for autoForm
navs.attachSchema(new SimpleSchema({
  prefix:
  {
    type: "select2",
    autoform: {
      options: function () {
        var values = [
          {
            label: 'Application', 
            value: ''
          }, 
          {
            label: 'CMS', 
            value: 'cms'
          }
        ];
        return values;
      }
    },
    optional: true
  },
  type:
  {
    type: "select2",
    autoform: {
      options: function () {
        var values = [
          {
            label: 'internal', 
            value: 'internal'
          }, 
          {
            label: 'external', 
            value: 'external'
          }
        ];
        return values;
      }
    }
  },
  href:
  {
    type: String,
    label: "Href",
    max: 160
  },
  target:
  {
    type: String,
    label: "Target",
    //placeholder: "To prevent refreshes in rendering leave it empty. You may use _self for items in CMS",
    max: 20,
    //defaultValue: "_self",
    optional: true
  },
  text:
  {
    type: String,
    label: "Text",
    max: 30,
    optional: true
  },
  sort:
  {
    type: Number,
    autoform: {
        type: "hidden",
        label: false
    },
    optional: true
  }
}));
// Define rules for autoCms
navs.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Navigations',
  message: {
    list: 'You can add navigation items into nav-bar.',
    //success: 'Success: Everything is completed.',
    //error: 'Error: Something went wrong, please try again.',
  },
  buttons: {
    edit: {
      label: '<i class="fa fa-pencil-square-o" alt="Edit"></i> Edit',
      class: 'btn btn-xs btn-default',
      auth: function() {    // default false
        return true; 
      }
    },  
    delete: {
      label: '<i class="fa fa-trash" alt="Delete"></i> Delete',
      class: 'btn btn-xs btn-danger',
      auth: function() {    // default false
        return true; 
      }
    },
    showNavButtons: true,    // default true
    navButtonInsert: {
      label: '<i class="fa fa-plus"></i>',
      class: 'btn btn-default'
    },
    navButtonList: {
      label: '<i class="fa fa-list"></i>',
      class: 'btn btn-default'
    },
    showActionButtons: true  // default true
  },
  showNo: true,  // default true
  columns: {
    prefix: {
      label: "Prefix of item",
      data: function(data) {
        return data;
      }
    },
    type: {

    },
    href: {

    },
    target: {
    
    },
    text: {
      
    },
    sort: {
      edit: true
    }
    /*,
    extra: {
      value: function(id) {
        return id;
      }
    }*/
  }
}

if (Meteor.isServer) {
  navs.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });
}