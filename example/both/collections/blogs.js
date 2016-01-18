//First of all create Mongo collections
blogs = new Mongo.Collection('blogs');
// Attach schema for autoForm
blogs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 40
  },
  description: {
    type: String,
    label: "Description",
    max: 160
  },
  content: {
    type: String,
    label: "Content",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        settings: {
          height: 200
        }
      }
    },
    optional: true
  },
  picture: {
    type: String,
    label: 'Picture',
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
  },
  file: {
    type: String,
    label: 'File',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Files',
        //accept: 'image/*',
        label: 'Choose a file',
        //previewTemplate: 'filePreview',
        selectFileBtnTemplate: 'fileButtonSelect',
        removeFileBtnTemplate: 'fileButtonRemove',
        onBeforeInsert: function(fileObj) {

        },
        onAfterInsert: function(err, fileObj) {
        }
      }
    },
    optional: true
  },
  category: {
    type: String,
    label: "Category",
    type: "select2",
    autoform: {
      options: function () {
        return blogcategories.find().map(function (p) {
            if (!_.isUndefined(p.description))
              description = p.description;
            else
              description = '';

            return {label: p.title+' '+description, value: p._id};
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
      return this.userId;
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
blogs.autoCms = {
  wrapper: {
    type: 'table',
    class: 'table table-hover'
  },
  title: 'Blogs',
  buttons: {
    extra: {
      label: '<i class="fa fa-eye" alt="Show"></i> Show',
      class: 'btn btn-xs btn-success',
      auth: function() {    // default true
        return true; 
      },
      href: function(data) {
        return location.origin+'/blog/'+data;
      }
    },
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
    picture: {
      type: 'image',
      width: 60
    },
    title: {

    },
    description: {

    }
  }
}

if (Meteor.isServer) {
  blogs.allow({
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