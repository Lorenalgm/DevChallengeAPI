const mongoose = require('mongoose');

const { MONGO_URL, databaseOptions } = require('../config/database');

const init = () => {
  mongoose.connect(MONGO_URL, databaseOptions);
};

exports.init = init;
