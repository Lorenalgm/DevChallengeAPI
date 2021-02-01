require('./config/dotenv');

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');

const database = require('./database/init');

const errorHandler = require('./middlewares/errorHandler');
const routeNotFound = require('./middlewares/routeNotFound');

require('./providers/passport/index');

const routes = require('./routes');

const app = express();

database.init();

app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.PASSPORT_SESSION_COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.use(routeNotFound);
app.use(errorHandler);

module.exports = app;
