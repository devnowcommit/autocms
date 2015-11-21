Package.describe({
  name: 'guncebektas:autocms',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'AutoCms is a simple solution to manage contents',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // set dependencies
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  
  api.use(['kadira:flow-router@2.7.0'], 'client', {weak: false, unordered: false});
  api.use('aldeed:autoform');
  
  // add files
  api.addFiles('template.html', 'client');
  api.addFiles(['helpers.js', 'events.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  api.use('tinytest');
  api.use('guncebektas:autotable');

  // add files
  api.addFiles('tests/client/test.js', 'client');
});
