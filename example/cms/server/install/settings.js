/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {
  // Settings
  if (settings.find().count() == 0){
  
    var data = [
      {
        "title" : "CMS for Meteor.js",
        "description" : "Menka is a tiny but powerful CMS",
        "createdBy" : "kokop",
        "logo" : "gyg",
        "favicon" : "mmoıkj"
      }
    ];

    for(var i = 0; i < data.length; i++){
      settings.insert(data[i]);
    }
  }
});