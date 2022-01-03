const authRouter = require('express').Router();

const AuthenticationController = require('../controllers/AuthenticationController');

// auth with github
authRouter.get('/:code', AuthenticationController.oAuthGitHub);

module.exports = authRouter;
