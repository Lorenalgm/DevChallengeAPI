const express = require('express');
const cors = require('cors');

const routes = require('../../routes');

const errorHandler = require('../../middlewares/errorHandler');
const routeNotFound = require('../../middlewares/routeNotFound');

/**
 * Express app bootloader
 */
function boot(app) {
  app.use(cors());
  app.use(express.json());

  app.use(routes);

  app.use(routeNotFound);
  app.use(errorHandler);
}

module.exports = boot;
