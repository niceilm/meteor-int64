Package.describe({
  name: 'flynn:int64',
  version: '0.0.1',
  summary: 'Wrapper for NPM node-int',
  git: 'git@github.com:niceilm/meteor-int64.git',
  documentation: 'README.md'
});

Npm.depends({
  'node-int64': '0.4.0'
});

Package.onUse(function(api) {
  api.addFiles('lib/int64.js', 'server');
  api.export("Int64");
});
