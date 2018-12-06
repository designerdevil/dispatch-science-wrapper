const DEFAULT_HOST = 'dsapp.io/integration';
const DEFAULT_PORT = null;
const DEFAULT_PROTOCOL = 'https';
const DEFAULT_BASE_PATH = '/api';
const DEFAULT_API_VERSION = 'v1';

// Use node's default timeout:
const DEFAULT_TIMEOUT = require('http').createServer().timeout;

const Orders = require('./resources/Orders');

const resources = {
  Orders
};

function DS(key) {
  if (!(this instanceof DS)) {
    return new DS(key);
  }

  this.api = {
    key: key.authKey,
    host: `${key.account}.${DEFAULT_HOST}`,
    port: DEFAULT_PORT,
    protocol: DEFAULT_PROTOCOL,
    basePath: DEFAULT_BASE_PATH,
    version: DEFAULT_API_VERSION,
    timeout: DEFAULT_TIMEOUT
  };

  this.prepResources();
}

DS.resources = resources;

DS.prototype = {
  setApiField: function setApiField(key, value) {
    this.api[key] = value;
  },
  prepResources: function prepResources() {
    Object.keys(resources).forEach((name) => {
      this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
    });
  },
};

module.exports = DS;
