require('../../config/dotenv');
require('../../providers/passport');

const express = require('express');
const MongoDBConnection = require('../../infrastructure/database/mongodb/Connection');

class App {
  constructor() {
    this.express = express();

    this.connect();
  }

  // eslint-disable-next-line class-methods-use-this
  connect() {
    MongoDBConnection.connect();
  }
}

module.exports = new App().express;
