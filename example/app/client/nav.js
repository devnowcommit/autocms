Template.appNav.helpers({  
	'items': function() {
		var items = navs.find({prefix: {$exists: false}}, {sort: {sort: -1}}).fetch();
		
		var itemValues = [];
		var itemValues = $.map(items, function(el) { return el; })
		
		for (i=0; i<itemValues.length; i++) {
			if (itemValues[i].type != 'external') {
				
				if (!_.isUndefined(itemValues[i].prefix)) {
					if (itemValues[i].prefix.length > 0)
						itemValues[i].prefix = '/' + itemValues[i].prefix + '/';
					else
						itemValues[i].prefix = '/';
				}	else {
					itemValues[i].prefix = '/';
				}

				itemValues[i].url = location.origin + itemValues[i].prefix + itemValues[i].href;

			} else {
				itemValues[i].url = itemValues[i].href;
			}
    }

		return itemValues;
	}
});
Template.appNav.events({
	'click li a': function(event) {
		$('ul.nav.navbar-nav li').removeClass('active');
		$(event.target).parent().addClass('active');
	}
})