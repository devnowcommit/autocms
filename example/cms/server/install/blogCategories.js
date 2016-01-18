/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (blogcategories.find().count() == 0){
    var data = [
      // CMS
      {
		    "_id" : "YKBLsPSRShWabtvYA",
		    "title" : "First Category",
			},
			{
		    "_id" : "zz8YJ97eQBYGzrkD9",
		    "title" : "Second Category",
			}
    ];

    for(var i = 0; i < data.length; i++){
      blogcategories.insert(data[i]);
    }
  }
});