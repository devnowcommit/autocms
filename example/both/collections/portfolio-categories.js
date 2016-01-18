//First of all create Mongo collections
portfoliocategories = new Mongo.Collection('portfolioCategories');
// Attach schema for autoForm
portfoliocategories.attachSchema(new SimpleSchema({
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
portfoliocategories.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Categories for Portfolios',
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

    }
  }
}

if (Meteor.isServer) {
  portfoliocategories.allow({
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