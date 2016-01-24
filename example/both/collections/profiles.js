profiles = new Mongo.Collection('profiles');
// Attach schema for autoForm
profiles.attachSchema(new SimpleSchema({
  'userId': {
    label: "User",
    unique: true,
    type: "select2",
    autoform: {
      options: function () {
        console.log(Meteor.users.find());
        return Meteor.users.find().map(function (u) {
          return {label: u.profile.email, value: u._id};
        });
      }
    },
    optional: true
  },
  'type': {
    type: "select2",
    label: "Authentication",
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "User", value: "user"},
          {label: "Admin", value: "admin"}
        ];
      }
    }
  },
  'profile.name': {
    type: String,
    label: "Name",
    max: 100,
    optional: true
  },
  'profile.surname': {
    type: String,
    label: "Surname",
    max: 100,
    optional: true
  },
  'profile.picture': {
    type: String,
    label: 'Picture',
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
  'profile.about' : {
    type: String,
    label: "About",
    max: 200,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    },
    optional: true
  },
  'profile.gender': {
    type: String,
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "Male", value: "male"},
          {label: "Female", value: "female"}
        ];
      }
    }
  },
  'profile.phone': {
    type: [Object],
    optional: true
  },
  'profile.phone.$.number': {
    type: String,
    max: 20,
    optional: true
  },
  'profile.address': {
    type: [Object],
    optional: true
  },
  'profile.address.$.street': {
    type: String,
    label: "Street",
    max: 100,
    optional: true
  },
  'profile.address.$.city': {
    type: String,
    label: "City",
    max: 30,
    optional: true
  },
  'profile.address.$.state': {
    type: String,
    label: "State",
    max: 100,
    optional: true
  },
  'profile.address.$.country': {
    type: String,
    label: "Country",
    max: 100,
    optional: true
  }
}));
// Define rules for autoCms
profiles.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'User Profiles',
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
    userId: function(data){
      return data;
    },
    profile: {
      label: "User",
      data: function(data){
        var picture = '';

        if (!_.isUndefined(data.picture))
          picture = '<img src="'+ location.origin +'/cfs/files/images/'+ data.picture +'" width="24">';

        return picture+' '+data.name+' '+data.surname;
      }
    },
    type: {
      
    }
  }
}

if (Meteor.isServer) {
  profiles.allow({
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
