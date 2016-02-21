/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (comments.find().count() == 0){
    comments.insert({
      "comment" : "a comment",
      "blog" : "fiKkjd2wPnFSPBt2H",
      "createdBy" : "RkRApQp2vppqjiCyx",
      "createdAt" : 1453121903851.0000000000000000
    },
    {
      "comment" : "a sample comment",
      "blog" : "fiKkjd2wPnFSPBt2H",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045762977.0000000000000000
    },
    {
      "comment" : "sample comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045769861.0000000000000000
    },
    {
      "comment" : "sample comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045775345.0000000000000000
    },
    {
      "comment" : "sample comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045741253.0000000000000000
    },
    {
      "comment" : "a lorem ipsum style comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045808772.0000000000000000
    },
    {
      "comment" : "sample comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045816092.0000000000000000
    },
    {
      "comment" : "this is a sample comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045828175.0000000000000000
    },
    {
      "comment" : "another sample comment",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045839768.0000000000000000
    },
    {
      "comment" : "a lorem ipsum comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045808772.0000000000000000
    },
    {
      "comment" : "Lorem ipsum",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045808872.0000000000000000
    },
    {
      "comment" : "a lorem ipsum style comment for second post",
      "blog" : "8NExpZzkYZebieDyj",
      "createdBy" : "2hwNHfP9dzWtwGoLw",
      "createdAt" : 1456045808982.0000000000000000
    });    
  }
});