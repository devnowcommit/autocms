Template.cmsNav.helpers({  
	'items': function() {

		var prefix = "cms";
		var items = navs.find({prefix: prefix}).fetch();
		
		var itemValues = [];
		var itemValues = $.map(items, function(el) { return el; })
		
		for (i=0; i<itemValues.length; i++) {
			if (itemValues[i].type != 'external') {
				
				if (itemValues[i].prefix.length > 0)
					itemValues[i].prefix = '/' + itemValues[i].prefix + '/';
				else
					itemValues[i].prefix = '/';

				itemValues[i].url = location.origin + itemValues[i].prefix + itemValues[i].href;

			} else {
				itemValues[i].url = itemValues[i].href;
			}
    }
		return itemValues;
	}
});