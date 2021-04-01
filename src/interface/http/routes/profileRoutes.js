const profileRouter = require('express').Router();
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');

profileRouter.get('/', ensureAuthenticated, (request, response) => {
  delete request.user.id;
  response.send(
    `You are logged in, this is your profile: ${request.user.name}`
  );
});

module.exports = profileRouter;
