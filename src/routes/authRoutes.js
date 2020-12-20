const authRouter = require('express').Router();
const passport = require('passport');

// auth login
authRouter.get('/login', (request, response) => {
  response.send('logging in');
});

// auth logout
authRouter.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

// auth with github
authRouter.get(
  '/github',
  passport.authenticate('github', {
    scope: ['read:user']
  })
);

// callback route for github to redirect to

authRouter.get(
  '/github/callback',
  passport.authenticate('github'),
  (request, response) => {
    response.redirect('/profile');
  }
);

module.exports = authRouter;
