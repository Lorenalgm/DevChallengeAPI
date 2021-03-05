const express = require('express');
require('express-async-errors');
const cors = require('cors');

const cookieSession = require('cookie-session');
const passport = require('passport');

const Routes = require('../../shared/infra/http/routes/Routes');

const errorHandler = require('../../middlewares/errorHandler');
const routeNotFound = require('../../middlewares/routeNotFound');

/**
 * Express app bootloader
 */
function boot(app, container) {
  app.use(cors());
  app.use(express.json());

  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.PASSPORT_SESSION_COOKIE_KEY]
    })
  );

  const routes = new Routes(container).getRouter();

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);

  app.use(routeNotFound);
  app.use(errorHandler);
}

module.exports = boot;
