/* When Created */
Template.blog.onCreated(function() {
  seo.set({
    title: 'It\'s my blog'
  });
});

var subscriptionBlogs = Meteor.subscribeWithPagination('blogs', 2);

/* Helpers */
Template.blog.helpers({
	'items' : function() {
	  return blogs.sorted(subscriptionBlogs.loaded()/*, FlowRouter.getParam("id")*/);
	},
	'title': function () {
	  return this.title;
	},
	'description': function () {
	  return this.description;
	},
	'likeAmount': function () {
	  return this.like;
	},
	'commentAmount': function () {
		return comments.find({blog: this._id}).count();
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
	'category': function () {
	  return blogcategories.findOne(this.category);
	},
	'createdBy': function () {
		author = profiles.find({userId: this.createdBy},{limit:1}).fetch()[0];
		
		if (!_.isUndefined(author))
			return author.profile.name+' '+author.profile.surname;
		else
			return 'Unknown author';
	},
	'slug': function() {
		return slug(this.title);
	},
	'loading': function() {
    return !subscriptionBlogs.ready();
  },
  'hasMore': function() {
    return blogs.sorted(subscriptionBlogs.loaded()/*, FlowRouter.getParam("id")*/).count() == subscriptionBlogs.limit();
  }
});
Template.blog.events({
	'click .load-more': function (event) {
    event.preventDefault();

    subscriptionBlogs.loadNextPage();
  },
  'click .hide-more': function (event) {
    event.preventDefault();

    subscriptionBlogs.reset();
  }
}); 
Template.blogCategories.helpers({
	'categories' : function() {
	  return blogcategories.find({}, {sort: {date: -1, name: 1} });
	},
	'title': function () {
	  return this.title;
	},
	'slug': function() {
		return slug(this.title);
	},
	'all': function() {
		if (!_.isUndefined(FlowRouter.getParam("id"))) {
			return true;
		} else {
			return false;
		}
	}
}); 
Template.blogTrends.helpers({
	'items': function() {
		return blogs.find({},{sort: {like: -1}, limit:3});
	},
	'title': function() {
	  return this.title;
	},
	'picture': function () {
		return location.origin+'/cfs/files/images/'+ this.picture;
	},
	'createdAt': function() {
		return formatDate('d.m.Y', new Date(this.createdAt));
	},
	'slug': function() {
		return slug(this.title);
	},
	'all': function() {
		if (!_.isUndefined(FlowRouter.getParam("id"))) {
			return true;
		} else {
			return false;
		}
	}
});

Template.blogSearch.helpers({
	searchAttributes: function () {
    return { 
    	'class': 'form-control easy-search-input', 
    	'placeholder': 'Start searching...' 
    };
  },
  'slug': function() {
		return slug(this.title);
	},
  blogsIndex: () => blogsIndex
});