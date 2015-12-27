/* 
Deny update role for console hack like,
Meteor.users.update(Meteor.userId(), {
  set: {
    'profile.is_admin': false
  }
});

Because users collection is dedicated for roles and permissions.
Users can only update documents, not replace them. 
Use a Mango update operator, such as $set to change such thing
*/
Meteor.users.deny({
  update: function() {
    return true;
  }
});