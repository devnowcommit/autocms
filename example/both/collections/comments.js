//First of all create Mongo collections
comments = new Mongo.Collection('comments');
// Attach schema for autoForm
comments.attachSchema(new SimpleSchema({
  comment:
  {
    type: String,
    label: "Comment",
    max: 160
  },
  blog: {
    type: String,
    label: "Blog",
    type: "select2",
    autoform: {
      options: function () {
        return blogs.find().map(function (p) {
          return {label: p.title, value: p._id};
        });
      }
    }
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
comments.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Comments',
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
    comment: {

    },
    createdBy: function(data) {
      user = Meteor.users.findOne(data);
      return user.profile.name;
    },
    createdAt: function(data) {
      time = new Date(data);
      d = time.getDate();
      m = time.getMonth() + 1;
      y = time.getFullYear();

      return d+'.'+m+'.'+y;
    },
    blog: function(data){
      blog = blogs.findOne(data);
      return '<a href="'+location.origin+'/cms/blogs/item/'+data+'" title="Click here to edit blog" target="_self">'+ blog.title +'</a>';
    }
  }
}

if (Meteor.isServer) {
  comments.allow({
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