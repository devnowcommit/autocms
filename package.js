/** 
  autoCms is working nice with autoForm and has a huge need of it
  autoCms handles not only insert and update events but also can list and construct relations with other collections 
  in table and we are calling this extension as autoTable. 
  In conclusion, autoCms is the combination of autoForm and autoTable
  
  @category   cms
  @authors    günce ali bektas <info@guncebektas.com>, aykut aktas <aykut@aktas.me>
  @link       https://github.com/guncebektas/autocms
*/
Package.describe({
  name: 'guncebektas:autocms',
  version: '1.1.1',
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

  api.imply([
    'underscorestring:underscore.string@3.2.2',
    'kadira:flow-router@2.10.0',
    'kadira:blaze-layout@2.3.0',
    'arillo:flow-router-helpers@0.4.6',
    'aldeed:template-extension@4.0.0',
    'aldeed:collection2@2.8.0',
    'aldeed:autoform@5.8.1',
    'aldeed:simple-schema@1.5.3',
    'aldeed:delete-button@2.0.0',
    'cfs:standard-packages@0.5.9',
    'cfs:filesystem@=0.1.2',
    'cfs:gridfs@=0.0.33',
    'yogiben:autoform-file@0.4.2',
    'mpowaga:autoform-summernote@0.4.3',
    'mrt:flash-messages@1.0.1'
  ]);

  // set dependencies
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  
  api.use([
    'kadira:flow-router@2.10.0',
    'kadira:blaze-layout@2.3.0',
    'arillo:flow-router-helpers@0.4.6',
    'mrt:flash-messages@1.0.1'
  ], 'client', {weak: false, unordered: false});
  
  api.use([
    'underscorestring:underscore.string@3.2.2',
    'aldeed:template-extension@4.0.0',
    'aldeed:collection2@2.8.0',
    'aldeed:autoform@5.8.1',
    'aldeed:simple-schema@1.5.3',
    'aldeed:delete-button@2.0.0',
    'cfs:standard-packages@0.5.9',
    'cfs:filesystem@=0.1.2',
    'cfs:gridfs@=0.0.33',
    'yogiben:autoform-file@0.4.2',
    'mpowaga:autoform-summernote@0.4.3'
  ], ['client','server'], {weak: false, unordered: false});
  
  //api.export('autoCms');

  // add files
  api.addFiles([
    // html files
    'templates/fileUploadSystem.html',
    'templates/autoCms.html',
    // plugins 
    'plugins/sweetalert/sweetalert.css',
    'plugins/sweetalert/sweetalert.min.js',


    //'plugins/datatables/jquery-ui.js',
    //'plugins/datatables/datatables.css',
    //'plugins/datatables/jquery.dataTables.min.js',
    //'plugins/datatables/jquery.dataTables.rowReordering.js',
    //'plugins/datatables/dataTables.responsive.min.js',
    //'plugins/datatables/dataTables.bootstrap.min.js',


    // core files
    'methods.js',
    'helpers.js', 
    'events.js',
    'hooks.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  api.use('tinytest');

  // add files
  api.addFiles('tests/client/test.js', 'client');
});
