//First of all create Mongo collections
comments = new Mongo.Collection('comments');

comments.sorted = function(limit, blogId, commentId) {

  if (commentId == 0)
    return comments.find({blog: blogId}, {sort: {createdAt: -1}, limit: limit});
  else 
    return comments.find({parent: commentId}, {sort: {createdAt: 1}, limit: limit});
};

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
  parent:
  {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    optional: true
  },
  reported:
  {
    type: Number,
    autoform: {
        type: "hidden",
        label: false
    },
    optional: true
  },
  // hide createdBy column
  createdBy: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { 
      if (this.isInsert) {
          return this.userId;
      } else {
          this.unset();  // Prevent user from supplying their own value
      }
    },
    optional: true
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
    reported: {

    },
    createdBy: {
      label: 'Author',
      data: function(data) {
        console.log(data);
        author = profiles.find({userId: data},{limit:1}).fetch()[0];
      
        if (!_.isUndefined(author))
          return '<a href="'+location.origin+'/cms/profiles/item/'+author._id+'" title="Click here to edit profile of the user">'+ author.profile.name+' '+author.profile.surname +'</a>';
        else
          return 'Unknown author';
      }
    },
    createdAt: {
      label: 'Date',
      data: function(data) {
        time = new Date(data);
        d = time.getDate();
        m = time.getMonth() + 1;
        y = time.getFullYear();

        return d+'.'+m+'.'+y;
      }
    },
    blog: {
      label: 'Blog',
      data: function(data){
        blog = blogs.findOne(data);
        return '<a href="'+location.origin+'/cms/blogs/item/'+data+'" title="Click here to edit blog">'+ blog.title +'</a>';
      }
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