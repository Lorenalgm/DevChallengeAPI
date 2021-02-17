const authRouter = require('express').Router();

const AuthorizationController = require('../controllers/AuthorizationController');

const authorizationController = new AuthorizationController();

authRouter.get('/github', (request, response) =>
  authorizationController.getAuthorizationCode(request, response)
);

authRouter.get(
  '/github/callback',
  (request, response, next) =>
    authorizationController.getAccessToken(request, response, next),
  (request, response, next) =>
    authorizationController.getUserProfile(request, response, next),
  (request, response) => authorizationController.handleUser(request, response)
);

module.exports = authRouter;
