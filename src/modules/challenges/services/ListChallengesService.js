class ListChallengesService {
  constructor(challengesRepository) {
    this.challengesRepository = challengesRepository;
  }

  async execute(filters = {}) {
    const challenges = await this.challengesRepository.fetchAll(filters);

    return challenges;
  }
}

module.exports = ListChallengesService;
