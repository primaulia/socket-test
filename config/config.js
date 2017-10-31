var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'socket-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/socket-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'socket-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/socket-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'socket-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/socket-test-production'
  }
};

module.exports = config[env];
