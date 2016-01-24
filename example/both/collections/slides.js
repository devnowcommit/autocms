//First of all create Mongo collections
slides = new Mongo.Collection('slides');
// Attach schema for autoForm
slides.attachSchema(new SimpleSchema({
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
    max: 160,
    optional: true
  },
  link:
  {
    type: String,
    label: "Link",
    max: 160,
    optional: true
  },
  image1: {
    type: String,
    label: 'Image',
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
  // hide createdBy column
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
slides.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Slides',
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
    title: {

    },
    description: {

    },
    link: {

    },
    image1: {
      type: 'image',
      width: 60
    }
  }
}

if (Meteor.isServer) {
  slides.allow({
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