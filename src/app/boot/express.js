const express = require('express');
const cors = require('cors');

const cookieSession = require('cookie-session');

const routes = require('../../routes');

const errorHandler = require('../../middlewares/errorHandler');
const routeNotFound = require('../../middlewares/routeNotFound');

/**
 * Express app boot loader
 */
function boot(app) {
  app.use(cors());
  app.use(express.json());

  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.PASSPORT_SESSION_COOKIE_KEY]
    })
  );

  app.use(routes);

  app.use(routeNotFound);
  app.use(errorHandler);
}

module.exports = boot;
