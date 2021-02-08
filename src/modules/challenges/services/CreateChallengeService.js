class CreateChallengeService {
  constructor(challengesRepository) {
    this.challengesRepository = challengesRepository;
  }

  async execute(challengeData) {
    const challenge = await this.challengesRepository.create(challengeData);
    return challenge;
  }
}

module.exports = CreateChallengeService;
