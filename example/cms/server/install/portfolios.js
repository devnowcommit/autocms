/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (portfolios.find().count() == 0){
    var data = [
      // CMS
      {
		    "title" : "First item of portfolio",
		    "description" : "Description of first item",
		    "link" : "#",
		    "category" : "PDuNy6sS3EEAnAWKL",
		  },
      {
		    "title" : "Second item of portfolio",
		    "description" : "Description of second item",
		    "link" : "#",
		    "category" : "tTQDXCQMMXvmRjJyx",
			},
			{
		    "title" : "Third item of portfolio",
		    "description" : "Description of third item",
		    "link" : "#",
		    "category" : "tTQDXCQMMXvmRjJyx",
			}
    ];

    for(var i = 0; i < data.length; i++){
      portfolios.insert(data[i]);
    }
  }
});