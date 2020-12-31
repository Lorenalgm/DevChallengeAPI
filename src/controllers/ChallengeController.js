const challengesService = require('../services/challenges.service');

module.exports = {
  async index(request, response) {
    const queryString = request.query;
    const challenges = await challengesService.fetchAll(queryString);
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
      github_url: githubUrl,
      brief,
      dev_id: devId
    } = request.body;

    const challenge = await challengesService.create({
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url: githubUrl,
      brief,
      dev_id: devId
    });

    return response.json(challenge);
  },

  async show(request, response) {
    const { challenge_id: id } = request.params;

    const challenge = await challengesService.fetchById(id);

    return response.json(challenge);
  }
};
