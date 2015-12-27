cmsNavItems = {
	prefix: '/cms/',
	items: [{
		type: 'internal',
		href: 'blogs/list',
		target: '_self',
		text: 'Blogs'
	},
	{
		type: 'internal',
		href: 'blogcategories/list',
		target: '_self',
		text: 'Blog Categories'
	},
	{
		type: 'internal',
		href: 'comments/list',
		target: '_self',
		text: 'Comments'
	},
	{
		type: 'internal',
		href: 'portfolios/list',
		target: '_self',
		text: 'Portfolios'
	},
	{
		type: 'internal',
		href: 'portfoliocategories/list',
		target: '_self',
		text: 'Portfolio Categories'
	},
	{
		type: 'internal',
		href: 'slides/list',
		target: '_self',
		text: 'Slides'
	},
	{
		type: 'internal',
		href: 'settings/list',
		target: '_self',
		text: 'Settings'
	},
	{
		type: 'external',
		href: 'http://google.com',
		target: '_blank',
		text: 'Google'
	}]
}

Template.cmsNav.helpers({  
	'items': function() {
		//console.log(cmsNavItems.items.length);

		for(var i = 0; i < cmsNavItems.items.length; i++){
			// Set full url
			if (cmsNavItems.items[i].type != 'external')
				cmsNavItems.items[i].url = cmsNavItems.prefix + cmsNavItems.items[i].href;
			else
				cmsNavItems.items[i].url = cmsNavItems.items[i].href;
		}

		return cmsNavItems.items;
	}
});