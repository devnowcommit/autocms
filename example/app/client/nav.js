appNavItems = {
	prefix: '/',
	items: [{
		type: 'internal',
		href: 'blog',
		target: '_self',
		text: 'Blog'
	},
	{
		type: 'internal',
		href: 'our-portfolio',
		target: '_self',
		text: 'Our Portfolio'
	},
	{
		type: 'internal',
		href: 'about-us',
		target: '_self',
		text: 'About us'
	}]
}

Template.appNav.helpers({  
	'items': function() {
		//console.log(appNavItems.items.length);

		for(var i = 0; i < appNavItems.items.length; i++){
			// Set full url
			if (appNavItems.items[i].type != 'external')
				appNavItems.items[i].url = appNavItems.prefix + appNavItems.items[i].href;
			else
				appNavItems.items[i].url = appNavItems.items[i].href;
		}

		return appNavItems.items;
	}
});