<h1>autoCms for Meteor.js</h1>
A simple solution to manage contents. You can easly list your data in a table, update, delete or insert.
```js
meteor add guncebektas:autocms
```
<h2>How to</h2>
<h4>Routes</h4>
```js
// cmsCollections
FlowRouter.route('/cms/:collection/:function', {
  action: function() {
    BlazeLayout.render("main", {
      content: 'autoCms'
    });
  }
});
FlowRouter.route('/cms/:collection/:function/:id', {
  action: function() {
    BlazeLayout.render("main", {
      content: "autoCms"
    });
  }
});
```
<h4>Into Body</h4>
```js
{{> Template.dynamic template=content}}
```
<h4>Rules</h4>
```js
Players = new Mongo.Collection('players');
// Attach schema for autoForm
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
  },
  picture: {
    type: String,
    label: 'Profile Picture',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Choose a file',
        previewTemplate: 'filePreview',
        selectFileBtnTemplate: 'fileButtonSelect',
        removeFileBtnTemplate: 'fileButtonRemove',
        onBeforeInsert: function(fileObj) {
        },
        onAfterInsert: function(err, fileObj) {
        }
      }
    },
    optional: true
  }
}));
// Define rules for autoCms
Players.autoCms = {
  wrapper: {
    type: 'list'
  },
  title: 'All players',
  showNo: false,
  columns: {
    picture: {
      type: 'image',
      width: 40
    },
    name: {
    },
    surname: {
    }
  }
}
```
<h4>Open links</h4>
```
localhost:3000/cms/Players/list
localhost:3000/cms/Players/insert
```
<h2>The result will be like that</h2>
<img src="http://guncebektas.com/autocms_1.0.0_result_players_table.jpg">
