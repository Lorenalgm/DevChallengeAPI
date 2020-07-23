const express = require('express');

const DevController = require('./controllers/DevController');
const ChallengeController = require('./controllers/ChallengeController');
const ChallengeDetailController = require('./controllers/ChallengeDetailController');
const NewsletterController = require('./controllers/NewsletterController');

const routes = express.Router();

routes.get('/challenges/:challenge_id', ChallengeDetailController.index);

routes.get('/challenges', ChallengeController.index);
routes.post('/challenges', ChallengeController.store);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


routes.get('/newsletter', NewsletterController.index);
routes.post('/newsletter', NewsletterController.store);

module.exports = routes;