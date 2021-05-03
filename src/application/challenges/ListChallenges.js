const ChallengeRepository = require('../../domain/ChallengeRepository');

class ListChallenges {
  constructor(repository = new ChallengeRepository()) {
    this.challengeRepository = repository;
  }

  //! Must return a domain object instead of a plain object.
  async run(filters = {}) {
    const challenges = await this.challengeRepository.fetchAll(filters);

    return challenges;
  }
}

module.exports = ListChallenges;