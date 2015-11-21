<h1>autocms for Meteor.js (beta)</h1>
AutoCms is a simple solution to manage contents. You can easly list your data in a table, update, delete or insert (CRUD).
You can set relations with other collections.

<h2>Dependencies</h2>
```js
underscorestring:underscore.string
kadira:flow-router
kadira:blaze-layout           
arillo:flow-router-helpers
aldeed:collection2           
aldeed:autoform
aldeed:simple-schema
aldeed:delete-button
```

<h2>How to use it</h2>
<h4>Set routes, for flow-router</h4>
```js
// cmsCollections
FlowRouter.route('/cms/:collection/:function', {
  action: function() {
    BlazeLayout.render("main", {
      content: 'cmsCollection'
    });
  }
});
FlowRouter.route('/cms/:collection/:function/:id', {
  action: function() {
    BlazeLayout.render("main", {
      content: "cmsCollection"
    });
  }
});
```
<hr>
<strong>An example to create a list:</strong>

<h4>Set rules</h4>
```js
//First of all create Mongo collections
Players = new Mongo.Collection('players');
Players.attachSchema(new SimpleSchema({
  name:
  {
    type: String,
    label: "Name",
    max: 100
  },
  surname:
  {
    type: String,
    label: "Surname",
    max: 100
  }
}));

Players.table = {
  title: 'List of all players',
  columns: {
    name: {

    },
    surname: {

    }
  }
}

if (Meteor.isServer) {
  Players.allow({
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
```
<h4>After all open this link</h4>
```
localhost:3000/cms/Players/find
```
