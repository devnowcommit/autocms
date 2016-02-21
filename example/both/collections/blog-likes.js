//First of all create Mongo collections
bloglikes = new Mongo.Collection('blogLikes');

bloglikes.attachSchema(new SimpleSchema({
  blog:
  {
    type: String,
    max: 40
  },
  user:
  {
    type: String,
    max: 40
  },
  // hide createdBy column
  like: {
    type: Number,
    max: 1,
  }
}));

if (Meteor.isServer) {
  bloglikes.allow({
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