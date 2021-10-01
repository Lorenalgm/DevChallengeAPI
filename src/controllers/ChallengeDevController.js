const ChallengeDev = require('../models/Challenge');

module.exports = {
  async index(request, response) {
    const challengesDevs = await ChallengeDev.find();

    return response.json(challengesDevs);
  },

  async store(request, response) {
    const { challengeId, devId } = request.body;

    const challengeDev = await ChallengeDev.create({
      start_date: Date(),
      end_date: null,
      solution_url: null,
      challenge_id: challengeId,
      dev_id: devId
    });

    return response.json(challengeDev);
  },

  async show(request, response) {
    const { devId } = request.params;

    const challengeDev = await ChallengeDev.find().where('dev_id', devId);

    return response.json(challengeDev);
  }
};
