Meteor.methods({
  // Remove a row from collection
  removeItem(collection, id) {
    check(collection, String);
    check(id, String);

    if (Roles.userIsInRole(this.userId, 'admin', 'default-group')) {
      eval(collection).remove(id);
    }
  },
  // Update a field in a collection
  updateItem(collection, id, column, value) {
    check(collection, String);
    check(id, String);
    check(column, String);
    check(value, String);
    
    if (Roles.userIsInRole(this.userId, 'admin', 'default-group')) {
      
      var setModifier = {$set: {}};
      setModifier.$set[column] = value;

      eval(collection).update(id, setModifier);
    }
  }
});