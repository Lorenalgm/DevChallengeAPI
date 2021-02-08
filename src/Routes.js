const express = require('express');

const ChallengesRoutes = require('./modules/challenges/infra/http/routes/ChallengesRoutes');
const authRouter = require('./routes/authRoutes');
const profileRouter = require('./routes/profileRoutes');

const DevController = require('./controllers/DevController');
const NewsletterController = require('./controllers/NewsletterController');

class Routes {
  constructor(container) {
    this.router = express.Router();
    this.container = container;

    this.mountRoutes();
  }

  mountChallengesRouter() {
    const challengesRoutes = this.container.resolve(
      'ChallengesRepository',
      ChallengesRoutes
    );

    const challengesRouter = challengesRoutes.getRouter();

    this.router.use('/challenges', challengesRouter);
  }

  mountAuthRouter() {
    this.router.use('/auth', authRouter);
  }

  mountProfileRouter() {
    this.router.use('/profile', profileRouter);
  }

  mountDevsRouter() {
    this.router.get('/devs', DevController.index);
    this.router.post('/devs', DevController.store);
  }

  mountNewsletterRouter() {
    this.router.get('/newsletter', NewsletterController.index);
    this.router.post('/newsletter', NewsletterController.store);
  }

  mountRoutes() {
    this.mountChallengesRouter();
    this.mountAuthRouter();
    this.mountProfileRouter();
    this.mountDevsRouter();
    this.mountNewsletterRouter();
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Routes;
