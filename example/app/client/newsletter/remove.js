Template.subscribeRemove.helpers({

});
Template.subscribeRemove.events({
	'click .btn-danger': function(event) {
		event.preventDefault();

		swal(
  		{
				title: "Are you sure?",
				text: "You can subscribe again whenever you want",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, unsubscribe me!',
				closeOnConfirm: false
			},
			function(){
				newsletter.remove(FlowRouter.getParam("id"));
		
				swal("Deleted!", "You have unsubscribed from our newsletter!", "success");
				FlowRouter.go('home');
			}
		);

		//newsletter.remove(FlowRouter.getParam("id"));
		//$(event.target).parent().html('<h3>You have removed from our newsletter</h3><button class="btn btn-default">Click for homepage</button>');
	},
	'click .btn-default': function(event) {
		event.preventDefault();

		FlowRouter.go("home");
	}
});