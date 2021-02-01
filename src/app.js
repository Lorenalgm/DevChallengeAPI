require('./config/dotenv');
require('./providers/passport');

const express = require('express');

const boot = require('./app/boot/express');
const database = require('./database/init');

const app = express();

database.init();

boot(app);

module.exports = app;
