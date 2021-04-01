const mongoose = require('mongoose');
const { MONGO_URL } = require('../../../shared/environment');

class MongoDBConnection {
  static connect() {
    mongoose.connect(MONGO_URL, this.CONNECTION_OPTIONS());
  }

  static CONNECTION_OPTIONS() {
    return {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
  }
}

module.exports = MongoDBConnection;
