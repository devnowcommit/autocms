Welcome to AutoCms
======================

### LICENSE: MIT

[![Build Status](https://api.travis-ci.org/cult-of-coders/redis-oplog.svg?branch=master)](https://travis-ci.org/cult-of-coders/redis-oplog)

## AutoCms
A plug and play admin dashboard for Meteor.js. 

You can easly list your data in a table, update, delete or insert.

## Installation
```js
meteor add guncebektas:autocms
```

Configure it
```js
//First of all create Mongo collections
newsletter = new Mongo.Collection('newsletter');

// Attach schema for autoForm
newsletter.attachSchema(new SimpleSchema({
  email:
  {
    type: String,
    label: "Email",
    max: 160
  },
  createdAt: {
    type: Number,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
      return new Date().getTime();
    }
  }
}));
// Define rules for autoCms
newsletter.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Newsletter',
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
    newsletter: {

    }
  }
}

if (Meteor.isServer) {
  newsletter.allow({
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

## Watch it
<p><a href="https://www.youtube.com/embed/uo1ju2qzL90">Click here to watch what you can do with the package</a></p>
## Example
<h4>In example</h4>
You can find an example in repository which covers some features of AutoCms. The example;
<ul>
  <li>Navigation module, to manage navbar</li>
  <li>Blog module, including comment and like system</li>
  <li>Dynamic page module, it's like blog but only articles</li>
  <li>Portfolio module, to show references</li>
  <li>Slides module, to manage carousel at homepage</li>
  <li>Newsletter list, users can subscribe or unsubscribe from the list</li>
  <li>Settings module, admin can change favicon, logo, footer or informations on contact page including location</li>
  <li>Seo module</li>
</ul>
<br/>
<p><a href="https://github.com/guncebektas/autocms/tree/master/example">Jump into codes of the example</a></p>
<br/>
<p><a href="https://trello.com/b/qUE3cSUd/autocms">Join discussiion on trello</a></p>
