// Turn on the debug
SimpleSchema.debug = true;

//First of all create Mongo collections
settings = new Mongo.Collection('settings');
// Attach schema for autoForm
settings.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 40
  },
  description: {
    type: String,
    label: "Description",
    max: 160
  },
  favicon: {
    type: String,
    label: 'Favicon',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Choose a file',
        previewTemplate: 'filePreview',
        onBeforeInsert: function(fileObj) {

        },
        onAfterInsert: function(err, fileObj) {
        }
      }
    },
    optional: true
  },
  logo: {
    type: String,
    label: 'Logo',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Choose a file',
        previewTemplate: 'filePreview',
        onBeforeInsert: function(fileObj) {

        },
        onAfterInsert: function(err, fileObj) {
        }
      }
    },
    optional: true
  },
  createdBy: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
      return this.userId; 
    },
    optional: true
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
    title: {
      label: 'Title',
      data: function(data){
        return '<strong>Title:</strong> '+ data;
      }
    },
    description:  {
      label: 'Description',
      data: function(data){
        return '<strong>Description:</strong> '+ data;
      }
    },
    favicon:  {
      label: 'Favicon',
      data: function(data){
        return '<strong>Favicon:</strong> <img src="'+ location.origin +'/cfs/files/images/'+ data +'" width="24">';
      }
    },
    logo:  {
      label: 'Logo',
      data: function(data){
        return '<strong>Logo:</strong> <img src="'+ location.origin +'/cfs/files/images/'+ data +'" width="200">';
      }
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