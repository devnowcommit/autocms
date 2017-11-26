Template.autoCms.onCreated(function(){
  // Global variables & configs for autoCms
  Tracker.autorun(function(){
    
    // Define cms object
    cms = {
      collection: FlowRouter.getParam("collection"),
      methods: FlowRouter.getParam("function"),
      id: FlowRouter.getParam("id"),
    };
    
    // Define rule sets
    if (!_.isUndefined(window[cms.collection].autoCms)) {
      cms.rules = window[cms.collection].autoCms;
    } else {
      cms.rules = window[cms.collection].autoOne;
    }
    
    Session.set('cms', cms);
  });
});