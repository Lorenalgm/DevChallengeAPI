const Challenge = require('../../domain/Challenge');

class CreateChallenge {
  constructor(repository) {
    this.challengeRepository = repository;
  }

  async run(challengeData) {
    const challenge = new Challenge(challengeData);

    return this.challengeRepository.create(challenge);
  }
}

module.exports = CreateChallenge;
