// Public routes
var publicFlowRouter; 
publicFlowRouter  = FlowRouter.group();

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
      content: "home",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/blog', {
  name: 'blog',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blog",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/blog-category/:id/:text', {
  name: 'blogByCategory',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blogByCategory",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/blog/:id/:text', {
  name: 'blog-item',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blogItem",
      contentEdit: "blogEdit",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/our-portfolio', {
  name: 'our-portfolio',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "portfolios",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/product', {
  name: 'products',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "product",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/product/:id', {
  name: 'products',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "productsItem",
      contentEdit: "productsEdit",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/page/:id/:text', {
  name: 'page-item',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "pageItem",
      contentEdit: "pageEdit",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/about-us', {
  name: 'about-us',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "aboutUs",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/contact', {
  name: 'contact',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "contact",
      footer: "appFooter"
    });
  }
});
publicFlowRouter.route('/subscribe-remove/:id', {
  name: 'subscribe-remove',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "subscribeRemove",
      footer: "appFooter"
    });
  }
});
// user-details
adminPrivateFlowRouter.route('/cms/user-details/:id', {
  name: 'admin-user-details',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: '',
      contentCms: 'userDetailsCms'
    });
  }
});
// autoCmsCollections
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
// backup
adminPrivateFlowRouter.route('/cms/backup', {
  name: 'admin-backup',
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: '',
      contentCms: 'backupCms'
    });
  }
});