const express = require('express');

const ChallengesController = require('../controllers/ChallengesController');

class ChallengesRoutes {
  constructor(challengesRepository) {
    this.challengesRepository = challengesRepository;
    this.challengesController = new ChallengesController(challengesRepository);

    this.router = express.Router();
    this.mountRoutes();
  }

  mountListChallengesRoute() {
    this.router.get('/', (request, response) =>
      this.challengesController.index(request, response)
    );
  }

  mountShowChallengeRoute() {
    this.router.get('/:challenge_id', (request, response) =>
      this.challengesController.show(request, response)
    );
  }

  mountCreateChallengeRoute() {
    this.router.post('/', (request, response) =>
      this.challengesController.create(request, response)
    );
  }

  mountRoutes() {
    this.mountListChallengesRoute();
    this.mountShowChallengeRoute();
    this.mountCreateChallengeRoute();
  }

  getRouter() {
    return this.router;
  }
}

module.exports = ChallengesRoutes;
