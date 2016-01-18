/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (pages.find().count() == 0){
    var data = [
      // CMS
      {
        "_id" : "GKYA7q5C9H5u9sgGM",
        "title" : "About us",
        "description" : "This is the description of the about us page",
        "content" : "<p>This text is about us</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      },
      {
        "title" : "Title of a sample page",
        "description" : "This is the description of the second sample page",
        "content" : "<p>Content of a sample</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      }
    ];

    for(var i = 0; i < data.length; i++){
      pages.insert(data[i]);
    }
  }
});