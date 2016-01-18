/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (blogs.find().count() == 0){
    var data = [
      // CMS
      {
        "_id" : "fiKkjd2wPnFSPBt2H",
        "title" : "Title of a post",
        "description" : "First post",
        "content" : "This is the content of the first post",
        "category" : "YKBLsPSRShWabtvYA",
        "createdBy" : "rEZynEk6H6CdjGpFk",
        "createdAt" : 1453104216902.0000000000000000
      },
      {
        "title" : "Second post",
        "description" : "This is the second post",
        "content" : "Content goes in here",
        "category" : "zz8YJ97eQBYGzrkD9",
        "createdBy" : "rEZynEk6H6CdjGpFk",
        "createdAt" : 1453104240946.0000000000000000
      }
    ];

    for(var i = 0; i < data.length; i++){
      blogs.insert(data[i]);
    }
  }
});