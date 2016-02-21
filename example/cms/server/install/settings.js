/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {
  // Settings
  if (settings.find().count() == 0){
  
    settings.insert({
      "_id" : "M3Mv2K9YkzbsY9fbE",
      "meta" : {
          "sitename" : "Menka",
          "title" : "CMS for Meteor.js",
          "description" : "This is a simple but powerful solution to manage contents in Meteor apps.",
          "favicon" : "QHSKD5GJ2f2twMR4d",
          "logo" : "eZXZxLaGAtXqkcnEF"
      },
      "contact" : {
          "email" : "admin@admin.com",
          "address" : "1234 Street Name, City Name, Country",
          "phone" : [ 
              {
                  "number" : "+905222224444"
              }, 
              {
                  "number" : "+905322224444"
              }
          ],
          "fax" : [ 
              {
                  "number" : "+902122224444"
              }
          ],
          "hours" : {
              "weekdays" : "9am to 5pm",
              "saturday" : "9am to 2pm",
              "sunday" : "Closed"
          }
      },
      "footer" : {
          "column1" : [ 
              {
                  "field" : "link1"
              }, 
              {
                  "field" : "link2"
              }, 
              {
                  "field" : "link3"
              }
          ],
          "column2" : [ 
              {
                  "field" : "link2"
              }, 
              {
                  "field" : "link3"
              }, 
              {
                  "field" : "link4"
              }
          ],
          "logo" : "pn5JQzQGfeB3m3Y96"
      }
    });    
  }    
});