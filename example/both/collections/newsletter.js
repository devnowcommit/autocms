//First of all create Mongo collections
newsletter = new Mongo.Collection('newsletter');

// Attach schema for autoForm
newsletter.attachSchema(new SimpleSchema({
  email:
  {
    type: String,
    label: "Email",
    max: 160
  },
  createdAt: {
    type: Number,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
      return new Date().getTime();
    }
  }
}));
// Define rules for autoCms
newsletter.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Newsletter',
  buttons: {
    edit: {
      label: '<i class="fa fa-pencil-square-o" alt="Edit"></i> Edit',
      class: 'btn btn-xs btn-default',
      auth: function() {    // default false
        return false; 
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
    newsletter: {

    }
  }
}

if (Meteor.isServer) {
  newsletter.allow({
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