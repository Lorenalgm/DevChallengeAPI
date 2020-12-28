const challengesService = require('../services/challenges.service');

module.exports = {
  async index(request, response) {
    const { type, level, techs } = request.query;
    const filter = {};
    let challenges = [];

    if (type) filter.type = type;
    if (level) filter.level = level;
    if (techs) filter.techs = techs;

    challenges = await Challenge.find(filter);

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
