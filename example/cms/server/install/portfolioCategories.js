/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (portfoliocategories.find().count() == 0){
    var data = [
      // CMS
      {
		    "_id" : "PDuNy6sS3EEAnAWKL",
		    "title" : "First Category of Portfolio",
			},
			{
		    "_id" : "tTQDXCQMMXvmRjJyx",
		    "title" : "Second Category of Portfolio",
			}
    ];

    for(var i = 0; i < data.length; i++){
      portfoliocategories.insert(data[i]);
    }
  }
});