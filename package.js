/** 
 * autoCms
 * 
 * A plug & play style admin panel which is working with autoForm.
 * 
 * @category   CMS
 * @authors    Gunce Ali Bektas <info@guncebektas.com>, Aykut Aktas <aykut@aktas.me>
 * @link       https://github.com/guncebektas/autocms
 */
Package.describe({
  name: 'guncebektas:autocms',
  version: '1.1.40',
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

  Npm.depends({
    'simpl-schema': '0.5.0',
  });
 
  // set dependencies
  api.imply([
    'underscorestring:underscore.string@3.2.2',
    'kadira:flow-router@2.12.1',
    'kadira:blaze-layout@2.3.0',
    'arillo:flow-router-helpers@0.4.6',
    'aldeed:template-extension@4.0.0',
    'aldeed:collection2@2.7.1',
    'aldeed:autoform@5.8.1 || 6.2.0',
    'aldeed:simple-schema@1.5.3',
    'aldeed:delete-button@2.0.0',
    'elevatedevdesign:autoform-slingshot@0.0.8',
    'yogiben:autoform-file@0.4.2'
  ]);
  
  api.use(["tap:i18n"], ["client", "server"]);

  // api.use('ecmascript');
  
  api.use([
    'underscorestring:underscore.string@3.2.2',
    'aldeed:template-extension@4.0.0',
    'aldeed:collection2@2.7.1',
    'aldeed:autoform@5.8.1 || 6.2.0',
    'aldeed:simple-schema@1.5.3',
    'aldeed:delete-button@2.0.0',
    'elevatedevdesign:autoform-slingshot@0.0.8',
    'yogiben:autoform-file@0.4.2'
  ], ['client','server'], {weak: false, unordered: false});

  api.use([
    'kadira:flow-router@2.12.1',
    'kadira:blaze-layout@2.3.0',
    'arillo:flow-router-helpers@0.4.6'
  ], 'client', {weak: false, unordered: false});

  api.use(['templating', 'jquery'], 'client');
  
  api.add_files("package-tap.i18n", ["client", "server"]);

  api.add_files([
    "i18n/en.i18n.json",
    "i18n/tr.i18n.json"
  ], ["client", "server"]);

  api.addFiles([
    // html files
    'server/methods.js'
  ], 'server');

  api.addFiles([
    // html files
    'client/templates/fileUploadSystem.html',
    'client/templates/index.html',

    'client/templates/created.js',
    'client/templates/helpers.js',
    'client/templates/events.js',
    
    // plugins 
    'client/plugins/sweetalert/sweetalert.css',
    'client/plugins/sweetalert/sweetalert.min.js',

    //'plugins/datatables/jquery-ui.js',
    //'plugins/datatables/datatables.css',
    //'plugins/datatables/jquery.dataTables.min.js',
    //'plugins/datatables/jquery.dataTables.rowReordering.js',
    //'plugins/datatables/dataTables.responsive.min.js',
    //'plugins/datatables/dataTables.bootstrap.min.js',

    // core files
    'client/autoCmsObject.js',
    'client/autoFormHooksObject.js'

  ], 'client');

  //api.export('autoCms');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  api.use('tinytest');

  // add files
  api.addFiles('tests/client/test.js', 'client');
});
