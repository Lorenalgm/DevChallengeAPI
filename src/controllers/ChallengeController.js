const { challengesService } = require('../services');

module.exports = {
  async index(request, response) {
    const { type } = request.query;

    const challenges = await challengesService.fetchAll(type);

    return response.json(challenges);
  },

  async store(request, response) {
    const {
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url,
      brief,
      dev_id
    } = request.body;

    const challenge = await challengesService.create({
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url,
      brief,
      dev_id
    });

    return response.json(challenge);
  },

  async show(request, response) {
    const { challenge_id } = request.params;

    const challenge = await challengesService.fetchById(challenge_id);

    return response.json(challenge);
  }
};
