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
/* Edit button */
Template.pageEdit.helpers({
  'host' : function() {
    return location.origin;
  },
  'item' : function() {
    return FlowRouter.getParam("id");
  }
});
Template.pageEdit.events({
  "click #cms-item-delete": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    swal(
      {
        title: "Are you sure?",
        text: "You will not be able to recover this action",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      function(){
        pages.remove($(event.target).data('id'));
        
        swal("Deleted!", "The item has beed deleted!", "success");
        FlowRouter.go('blog');
      }
    );
  }
});