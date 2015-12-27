/*
var users = [
  {name:"Normal User",email:"normal@example.com",roles:[]},
  {name:"Admin User",email:"guncebektas@gmail.com",roles:['admin']}
];

_.each(users, function (user) {
  var id;

  id = Accounts.createUser({
    email: user.email,
    password: "26081986",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles, 'default-group');
  }
});
*/
//Roles.addUsersToRoles('8tr5SMoCDXwsMtFeg', 'admin', 'default-group');