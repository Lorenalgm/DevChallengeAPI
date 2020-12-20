const authRouter = require('express').Router();

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
authRouter.get('/github', (request, response) => {
  // handle with passport
  response.send('logging in with github');
});

module.exports = authRouter;
