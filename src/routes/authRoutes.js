const authRouter = require('express').Router();

const AuthorizationController = require('../controllers/AuthorizationController');

const authorizationController = new AuthorizationController();

authRouter.get(
  '/github/callback',
  (request, response, next) =>
    authorizationController.getAccessToken(request, response, next),
  (request, response, next) =>
    authorizationController.getUserProfile(request, response, next),
  // (request, response, next) =>
  //   authorizationController.handleUser(request, response, next),
  (_request, response) =>
    response.redirect('https://www.devchallenge.com.br/dashboard')
);

module.exports = authRouter;
