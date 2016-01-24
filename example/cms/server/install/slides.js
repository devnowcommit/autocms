/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (slides.find().count() == 0){
    var data = [
      // CMS
      {
        "title" : "Caption of the first slide"
      },
      {
        "title" : "Caption of the second slide",      
      }
    ];

    for(var i = 0; i < data.length; i++){
      slides.insert(data[i]);
    }
  }
});