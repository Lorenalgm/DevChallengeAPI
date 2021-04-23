const Challenge = require('../schemas/Challenge');

class ChallengeRepository {
  constructor() {
    this.challengeModel = Challenge;
  }

  async fetchAll(filters = {}) {
    const challenges = await this.challengeModel.find(filters);
    return challenges;
  }

  async fetchById(challengeId) {
    const challenge = await this.challengeModel.findById(challengeId);
    return challenge;
  }

  async create(challengeData = {}) {
    const challenge = await this.challengeModel.create(challengeData);
    return challenge;
  }
}

module.exports = ChallengeRepository;
