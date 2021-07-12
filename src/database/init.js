const mongoose = require('mongoose');

const { MONGO_URL, databaseOptions } = require('../config/database');

const init = () => {
  try {
    mongoose.connect(MONGO_URL, databaseOptions);
  } catch (e) {
    console.log(`Failed to connect with mongodb... ${e}`);
  }
};

exports.init = init;
