/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {
  // Settings
  if (settings.find().count() == 0){
  
    //for(var i = 0; i < data.length; i++){
      settings.insert({
        "title" : "CMS for Meteor.js",
        "description" : "Menka is a tiny but powerful CMS",
        "logo" : "gyg",
        "favicon" : "mmoıkj",
        "createdBy" : "",
      });
    //}
  }
});