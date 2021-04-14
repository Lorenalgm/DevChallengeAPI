const Challenge = require('../../domain/Challenge');
const ChallengeRepository = require('../../domain/ChallengeRepository');

class CreateChallenge {
  constructor(repository = new ChallengeRepository()) {
    this.challengeRepository = repository;
  }

  async run(challengeData) {
    const challenge = new Challenge(challengeData);

    return this.challengeRepository.create(challenge);
  }
}

module.exports = CreateChallenge;
