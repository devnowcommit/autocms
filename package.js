Package.describe({
  name: 'guncebektas:autocms',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'AutoCms is a simple solution to manage contents',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/guncebektas/autocms',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // set dependencies
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  
  api.use([
    'kadira:flow-router@2.7.0',
    'kadira:blaze-layout@2.2.0',
    'arillo:flow-router-helpers@0.4.6'
  ], 'client', {weak: false, unordered: false});
  
  api.use([
    'aldeed:autoform@5.7.1',
    'aldeed:simple-schema@1.3.3',
    'aldeed:delete-button@1.0.0'
  ], ['client','server'], {weak: false, unordered: false});
  
  // add files
  api.addFiles([
    'template.html',
    'helpers.js', 
    'events.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  api.use('tinytest');

  // add files
  api.addFiles('tests/client/test.js', 'client');
});
