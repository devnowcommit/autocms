Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    user.profile = options.profile;

    user.profile.type = 'user';

    if (Meteor.users.find().count() == 0) {
      user.profile.type = 'admin';
    } 

    user.profile.email = user.emails[0].address;
  }

  return user;
});

Accounts.onLogin(function (info) {
  var user = info.user;
  
  // We still want the default hook's 'profile' behavior.
  if(user.profile.type == "admin"){
    Roles.addUsersToRoles(user, 'admin', 'default-group');
  } else {
    Roles.setUserRoles(user, [], 'default-group');
  }

  return user;
});