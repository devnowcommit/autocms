// Public routes
var publicFlowRouter; 
publicFlowRouter  = FlowRouter.group({});

// Private routes
var privateFlowRouter;
privateFlowRouter = FlowRouter.group({
  triggersEnter: [
    function() {
      
      var route;

      if (!(Meteor.loggingIn() || Meteor.userId())) {

        route = FlowRouter.current();

        if (route.route.name !== 'home') {
          Session.set('redirectAfterLogin', route.path);
        }

        return FlowRouter.go('home');
      }
    }
  ]
});

// Private routes extended for admin
var adminPrivateFlowRouter;
adminPrivateFlowRouter = privateFlowRouter.group({
  triggersEnter: [ 
    function() {
      // If user is not authenticated redirect to homepage
      if (Roles.userIsInRole(Meteor.userId(), 'admin', 'default-group')) {
        console.log('Authenticated user');   
      } else {
        console.log('403 Access Denied');
        //return FlowRouter.go('home');
      }
    }
  ]
});

// Define routes
publicFlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "home"
    });
  }
});
publicFlowRouter.route('/our-portfolio', {
  name: 'our-portfolio',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "portfolios"
    });
  }
});
publicFlowRouter.route('/blog', {
  name: 'blog',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blog"
    });
  }
});
publicFlowRouter.route('/blog/:id', {
  name: 'blog-item',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blogItem"
    });
  }
});
publicFlowRouter.route('/page/:id', {
  name: 'page-item',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "pageItem"
    });
  }
});
publicFlowRouter.route('/about-us', {
  name: 'about-us',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "aboutUs"
    });
  }
});
// cmsCollections
adminPrivateFlowRouter.route('/cms/:collection/:function', {
  name: 'admin',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: '',
      contentCms: 'autoCms'
    });
  }
});
adminPrivateFlowRouter.route('/cms/:collection/:function/:id', {
  name: 'admin-cms',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: '',
      contentCms: 'autoCms'
    });
  }
});