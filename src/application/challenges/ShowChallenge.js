const ChallengeRepository = require('../../domain/ChallengeRepository');

class ShowChallenge {
  constructor(repository = new ChallengeRepository()) {
    this.challengeRepository = repository;
  }

  async run(id) {
    const challenge = await this.challengeRepository.fetchById(id);

    return challenge;
  }
}

module.exports = ShowChallenge;
