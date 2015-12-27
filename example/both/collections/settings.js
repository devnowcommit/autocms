//First of all create Mongo collections
settings = new Mongo.Collection('settings');
// Attach schema for autoForm
settings.attachSchema(new SimpleSchema({
  title:
  {
    type: String,
    label: "Title",
    max: 40
  },
  description:
  {
    type: String,
    label: "Description",
    max: 160
  },
  createdBy: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
      return Meteor.userId() 
    }
  }
}));
// Define rules for autoCms
settings.autoCms = {
  wrapper: {
    type: 'list',
    class: 'list-unstyled'
  },
  title: 'Settings',
  buttons: {
    edit: {
      label: '<i class="fa fa-pencil-square-o" alt="Edit"></i> Edit',
      class: 'btn btn-xs btn-default',
      auth: function() {    // default false
        return true; 
      }
    },  
    delete: {
      auth: function() {    // default false
        return false; 
      }
    },
    showNavButtons: false,    // default true
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
  showNo: false,  // default true
  columns: {
    title: function(data){
      return '<strong>Title:</strong> '+ data;
    },
    description: function(data){
      return '<strong>Description:</strong> '+ data;
    }
  }
}

if (Meteor.isServer) {
  settings.allow({
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