const authRouter = require('express').Router();

const AuthorizationController = require('../controllers/AuthorizationController');

const authorizationController = new AuthorizationController();

authRouter.get(
  '/github/callback',
  (request, response, next) =>
    authorizationController.authenticateUser(request, response, next),
  (request, response, next) =>
    authorizationController.handleUserData(request, response, next),
  (request, response) =>
    response.redirect(
      `https://www.devchallenge.com.br/dashboard?token=${request.token}`
    )
);

module.exports = authRouter;
