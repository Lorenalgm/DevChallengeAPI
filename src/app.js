require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env'
      : `.env.${process.env.NODE_ENV}`
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');

const errorHandler = require('./middlewares/errorHandler');
const routeNotFound = require('./middlewares/routeNotFound');

const passportSetup = require('./config/passportSetup');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
