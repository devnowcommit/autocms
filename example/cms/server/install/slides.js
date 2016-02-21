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
        "title" : "Use these for login",
        "image" : "ukPeH5M65Xh2nPNDu",
        "description" : "email: admin@admin.com | password: password"
      },
      {
        "title" : "Our first blog post",
        "image" : "cak9u8pcTfH6ZvMjo",
        "description" : "This is the first post of blog"
      }
    ];

    for(var i = 0; i < data.length; i++){
      slides.insert(data[i]);
    }
  }
});