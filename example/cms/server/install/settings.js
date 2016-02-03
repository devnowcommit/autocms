/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {
  // Settings
  if (settings.find().count() == 0){
  
    //for(var i = 0; i < data.length; i++){
      settings.insert({
        "_id" : "M3Mv2K9YkzbsY9fbE",
        "title" : "CMS for Meteor.js",
        "description" : "Menka is a tiny but powerful CMS",
        "email" : "admin@menka.com",
        "phone" : "+905222224444",
        "address": "1234 Street Name, City Name, Istanbul",
        "logo" : "gyg",
        "favicon" : "mmoıkj",
        "createdBy" : "",     
      });
    //}
  }    
});