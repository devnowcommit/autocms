//First of all create Mongo collections
portfolios = new Mongo.Collection('portfolios');
// Attach schema for autoForm
portfolios.attachSchema(new SimpleSchema({
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
  link:
  {
    type: String,
    label: "Link",
    max: 160
  },
  image1: {
    type: String,
    label: '1st Image',
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
  image2: {
    type: String,
    label: '2nd Image',
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
  image3: {
    type: String,
    label: '3rd Image',
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
  category: {
    type: String,
    label: "category",
    type: "select2",
    autoform: {
      options: function () {
        return portfoliocategories.find().map(function (p) {
            if (!_.isUndefined(p.description))
              description = p.description;
            else
              description = '';

            return {label: p.title+' '+description, value: p._id};
        });
      }
    }
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
portfolios.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Portfolio',
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
    },
    image2: {
      type: 'image',
      width: 60
    },
    image3: {
      type: 'image',
      width: 60
    },
    category: function(data){
      result = portfoliocategories.findOne(data);
      return result.title;
    }
  }
}

if (Meteor.isServer) {
  portfolios.allow({
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