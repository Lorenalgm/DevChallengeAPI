const authRouter = require('express').Router();
const passport = require('passport');

// auth login
authRouter.get('/login', (request, response) => {
  response.send('logging in');
});

// auth logout
authRouter.get('/logout', (request, response) => {
  // handle with passport
  response.send('logging out');
});

// auth with github
authRouter.get(
  '/github',
  passport.authenticate('github', {
    scope: ['read:user']
  })
);

// callback route for github to redirect to

authRouter.get('/github/callback', (request, response) => {
  response.send('You reached a callback URI');
});

module.exports = authRouter;
