Package.describe({
  name: 'kernal2306:wysiwyg-demo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['underscore', 'check', 'templating','mongo','insecure','summernote:summernote']);
  api.addFiles(['both.js'],['client','server']);
  api.addFiles(['server.js'],'server');
  api.addFiles(['wysiwyg-demo.html', 'wysiwyg-demo.js','client.js'],'client');
  api.export(['Datastore']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kernal2306:wysiwyg-demo');
  api.addFiles('wysiwyg-demo-tests.js');
});
