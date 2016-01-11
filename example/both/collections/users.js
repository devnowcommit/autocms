users = Meteor.users;
/*
// Attach schema for autoForm
users.attachSchema(new SimpleSchema({
  'emails': {
    type: [Object],
    optional: true
  },
  'emails.$.address':{
    type: String,
    label: "Email",
    max: 100,
    optional: true
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
  'profile.type': {
    type: "select2",
    autoform: {
      options: function () {
        var values = [
          {
            label: 'User', 
            value: 'user'
          }, 
          {
            label: 'Admin', 
            value: 'admin'
          }
        ];
        return values;
      }
    },
    optional: true
  },
  'profile.phone': {
    type: String,
    label: "Phone",
    max: 100,
    optional: true
  }
}));
*/
// Define rules for autoCms
users.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Users',
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
    _id: {

    },
    profile: function (data){
      return data.email
    }
  }
}

/* 
Deny update role for console hack like,
Meteor.users.update(Meteor.userId(), {
  set: {
    'profile.is_admin': false
  }
});

//Because users collection is dedicated for roles and permissions.
//Users can only update documents, not replace them. 
//Use a Mango update operator, such as $set to change such thing
*/
Meteor.users.allow({
  insert: function () {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function () {
    if (Roles.userIsInRole(Meteor.user(), 'admin', 'default-group'))
      return true;
    else
      return false;
  }
});
