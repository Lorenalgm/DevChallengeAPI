class ShowChallengeService {
  constructor(challengesRepository) {
    this.challengesRepository = challengesRepository;
  }

  async execute(challengeId) {
    const challenges = await this.challengesRepository.fetchById(challengeId);
    return challenges;
  }
}

module.exports = ShowChallengeService;
