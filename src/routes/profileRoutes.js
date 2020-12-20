const profileRouter = require('express').Router();

const ensureAuthenticated = (request, response, next) => {
  if (!request.user) {
    // if user is not logged in
    response.redirect('auth/login');
  } else {
    next();
  }
};

profileRouter.get('/', ensureAuthenticated, (request, response) => {
  delete request.user.id;
  response.send(
    `You are logged in, this is your profile: ${request.user.name}`
  );
});

module.exports = profileRouter;
