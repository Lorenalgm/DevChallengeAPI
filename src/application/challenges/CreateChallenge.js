class CreateChallenge {
  constructor(repository) {
    this.challengeRepository = repository;
  }

  async run(challengeData) {
    const challenge = await this.challengeRepository.create(challengeData);

    return challenge;
  }
}

module.exports = CreateChallenge;
