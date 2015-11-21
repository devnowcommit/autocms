// Write your tests here!
/* Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});
*/
Tinytest.add('Is the cmsCollection available on the client?', function( test ) {
  test.notEqual( typeof Template.cmsCollection, "undefined" );
});

Tinytest.add('Is FlowRouter defined?', function( test ) {
	test.notEqual( typeof FlowRouter.getParam("collection"), "undefined" );
});
