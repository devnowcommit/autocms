FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "home"
    });
  }
});
FlowRouter.route('/our-portfolio', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "portfolios"
    });
  }
});
FlowRouter.route('/blog', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blog"
    });
  }
});
FlowRouter.route('/blog/:id', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "blogItem"
    });
  }
});
FlowRouter.route('/about-us', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "aboutUs"
    });
  }
});
// cmsCollections
FlowRouter.route('/cms/:collection/:function', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: 'autoCms'
    });
  }
});
FlowRouter.route('/cms/:collection/:function/:id', {
  action: function() {
    BlazeLayout.render("main", {
      nav: 'appNav', 
      content: "autoCms"
    });
  }
});