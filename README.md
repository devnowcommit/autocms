<h1>autocms for Meteor.js (beta)</h1>
AutoCms is a simple solution to manage contents. You can easly list your data in a table, update, delete or insert (CRUD).
```js
meteor add guncebektas:autocms
```

<h2>How to use it (player list example)</h2>
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
<h4>After all open these links</h4>
```
localhost:3000/cms/Players/find
localhost:3000/cms/Players/insert
```

<br/><br/>
<h2>An Example which covers all options</h2>
<ol>
  <li>Create collection</li>
  <li>Set rules for autoForm</li>
  <li>Set rules for autoCms</li>
</ol>
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
      type: "select2",
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
      type: "select2",
      options: function () {
        return Players.find().map(function (p) {
            return {label: p.name+' '+p.surname, value: p._id};
        });
      }
    }
  },
  score2:
  {
    type: Number,
    label: "Score 2",
    defaultValue: 0
  },
  gamer3:
  {
    type: String,
    label: "Gamer 3",
    autoform: {
      type: "select2",
      options: function () {
        return Players.find().map(function (p) {
            return {label: p.name+' '+p.surname, value: p._id};
        });
      }
    },
    optional: true
  },
  score3:
  {
    type: Number,
    label: "Score 3",
    defaultValue: 0
  },
  gamer4:
  {
    type: String,
    label: "Gamer 4",
    autoform: {
      type: "select2",
      options: function () {
        return Players.find().map(function (p) {
            return {label: p.name+' '+p.surname, value: p._id};
        });
      }
    },
    optional: true
  },
  score4:
  {
    type: Number,
    label: "Score 4",
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

// Determine columnnames and their relations with other collections to display in table
Games.table = {
  title: 'List of all games',
  style: {
    table: {
      class: 'table table-hover'
    },
    thead: {
      class: ''
    },
    tbody: {
      class: ''
    }
  },
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
    gamer2: {
      relation: 'Players',
      display: {
        fields: {
          0: 'name',
          1: 'surname'
        }, 
        symbol: ' '
      }
    },
    score2: {
      class: function(data) {
        if (data > 5) {
            return 'success';
        }
      }
    },
    gamer3: {
      relation: 'Players',
      display: {
        fields: {
          0: 'name',
          1: 'surname'
        }, 
        symbol: ' '
      }
    },
    gamer4: {
      relation: 'Players',
      display: {
        fields: {
          0: 'name',
          1: 'surname'
        }, 
        symbol: ' '
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
<h2>The result will be like that</h2>
<img src="http://guncebektas.com/autocms_0.0.10_result.jpg">
