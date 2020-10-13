const mongoose = require('mongoose');

exports.clearDatabase = () => mongoose.connection.dropDatabase();

exports.closeConnection = () => mongoose.connection.close();
