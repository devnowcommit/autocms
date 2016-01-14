/* When Created */
Template.pageItem.onCreated(function() {
  var self = this;

  self.autorun(function () {
    self.subscribe("pages", function(){
      Tracker.autorun(function(){
        var page = pages.findOne(FlowRouter.getParam("id"));
        
        seo.set({
			    title: page.title
			  });

      });
    });
  });
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