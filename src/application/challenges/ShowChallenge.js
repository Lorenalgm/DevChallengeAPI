class ShowChallenge {
  constructor(repository) {
    this.challengeRepository = repository;
  }

  async run(id) {
    const challenge = await this.challengeRepository.fetchById(id);

    return challenge;
  }
}

module.exports = ShowChallenge;
