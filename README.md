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
<h4>The result will be like that</h4>
<img src="http://guncebektas.com/autocms_1.0.0_result_players_table.jpg">

<h2>Another example which covers more</h2>
```js
// First of all create Mongo collections
Games = new Mongo.Collection('games');
// Attach schema into collection
Games.attachSchema(new SimpleSchema({
  title:{
    type: String,
    label: "Title",
    max: 100
  },
  date:
  {
    type: Date,
    label: "Due Date",
    optional: true
  },
  gamer1:
  {
    type: String,
    label: "Gamer 1",
    autoform: {
      //type: "select2",
      options: function () {
        return Players.find().map(function (p) {
            return {label: p.name+' '+p.surname, value: p._id};
        });
      }
    }
  },
  score1:
  {
    type: Number,
    label: "Score 1",
    defaultValue: 0
  },
  gamer2:
  {
    type: String,
    label: "Gamer 2",
    autoform: {
      //type: "select2",
      options: function () {
        return Players.find().map(function (p) {
            return {label: p.name+' '+p.surname, value: p._id};
        });
      }
    }
  },
  score2:
  {
    type: String,
    label: "Score 2",
    defaultValue: 0
  },
  // hide createdBy column
  createdBy: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
    	return Meteor.userId() 
    }
  }
}));
// Define rules for autoCms
Games.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'All games',
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
    },
    gamer1: {
      relation: 'Players',
      display: {
        fields: {
          0: {
            data: 'picture',
            type: 'image',
            //width: 40
          },
          1: 'name',
          2: 'surname'
        }, 
        symbol: ' '
      }
    },
    score1: {
      class: function(data) {
        switch(true) {
          case (data < 3):
            return 'danger'
            break;
          case (data == 3):
            return 'info';
            break;
          case (data > 3):
            return 'success';
            break;
          default:
            return undefined;
        }
      }
    },
    gamer2: {
      relation: 'Players',
      display: {
        fields: {
          0: {
            data: 'picture',
            type: 'image',
            //width: 40
          },
          1: 'name',
          2: 'surname'
        }, 
        symbol: ' '
      }
    },
    score2: {
      class: function(data) {
        switch(true) {
          case (data < 3):
            return 'danger'
            break;
          case (data == 3):
            return 'info';
            break;
          case (data > 3):
            return 'success';
            break;
          default:
            return undefined;
        } 
      }
    }
  }
}
// Allow database actions in server
if (Meteor.isServer) {
  Games.allow({
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
<h4>Open links</h4>
```
localhost:3000/cms/Games/list
localhost:3000/cms/Games/insert
```
<h4>The result will be like that</h4>
<img src="http://guncebektas.com/autocms_1.0.0_result_games_table.jpg">