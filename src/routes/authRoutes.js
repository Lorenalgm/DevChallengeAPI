const authRouter = require('express').Router();

const AuthenticationController = require('../controllers/AuthenticationController');

// auth login
authRouter.get('/login', AuthenticationController.login);

// auth logout
authRouter.get('/logout', AuthenticationController.logout);

// auth with github
authRouter.get('/github', AuthenticationController.oAuthGitHubAuthorization());

// callback route for github to redirect to

authRouter.get(
  '/github/callback',
  AuthenticationController.oAuthGitHubRequestUserData(),
  AuthenticationController.oAuthCallbackRedirect
);

module.exports = authRouter;
