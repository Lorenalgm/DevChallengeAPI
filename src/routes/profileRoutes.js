const profileRouter = require('express').Router();

profileRouter.get('/', (request, response) => {
  delete request.user.id;
  response.send(
    `You are logged in, this is your profile: ${request.user.name}`
  );
});

module.exports = profileRouter;
