const express = require('express');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const DevController = require('./controllers/DevController');
const ChallengeController = require('./controllers/ChallengeController');
const NewsletterController = require('./controllers/NewsletterController');

const routes = express.Router();

routes.use('/auth', authRoutes);
routes.use('/profile', profileRoutes);

routes.get('/challenges', ChallengeController.index);
routes.get('/challenges/:challenge_id', ChallengeController.show);
routes.post('/challenges', ChallengeController.store);
routes.patch('/challenges/:challenge_id', ChallengeController.update);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/newsletter', NewsletterController.index);
routes.post('/newsletter', NewsletterController.store);

module.exports = routes;
