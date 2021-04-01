const Challenge = require('../schemas/Challenge');

class ChallengesRepository {
  constructor() {
    this.mongooseRepository = Challenge;
  }

  async fetchAll(filters = {}) {
    const challenges = await this.mongooseRepository.find(filters);
    return challenges;
  }

  async fetchById(challengeId) {
    const challenge = await this.mongooseRepository.findById(challengeId);
    return challenge;
  }

  async create(challengeData) {
    const challenge = await this.mongooseRepository.create(challengeData);
    return challenge;
  }
}

module.exports = ChallengesRepository;
