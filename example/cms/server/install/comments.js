/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (comments.find().count() == 0){
    comments.insert({
      "_id" : "wzBZ52zH5Mb4Ga6Pb",
      "comment" : "a comment",
      "blog" : "fiKkjd2wPnFSPBt2H",
      "createdBy" : "RkRApQp2vppqjiCyx",
      "createdAt" : 1453121903851.0000000000000000
    });    
  }
});