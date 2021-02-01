const mongoose = require('mongoose');

const { DEVCHALLENGE_MONGO, databaseOptions } = require('../config/database');

const init = () => {
  mongoose.connect(DEVCHALLENGE_MONGO, databaseOptions);
};

exports.init = init;
