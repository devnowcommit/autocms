/* When Created */
Template.pageItem.onCreated(function() {
  page = pages.findOne(FlowRouter.getParam("id"));
  console.log(page);
  /*
  seo.set({
    title: page.title
  });
	*/
});

/* Helpers */
Template.pageItem.helpers({
	'item' : function() {
	  return pages.findOne(FlowRouter.getParam("id"));
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	}
}); 