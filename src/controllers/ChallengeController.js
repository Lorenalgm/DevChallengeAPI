const Challenge = require('../models/Challenge');

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
      github_url,
      brief,
      dev_id
    } = request.body;

    const challenge = await Challenge.create({
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

    const challenge = await Challenge.find({ _id: challenge_id }).populate(
      'dev_id'
    );

    return response.json(challenge);
  }
};
