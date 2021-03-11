const Challenge = require('../models/Challenge');

module.exports = {
  async index(request, response) {
    const { type } = request.query;
    let challenges = [];

    if (type) {
      challenges = await Challenge.find({ type });
    } else {
      challenges = await Challenge.find();
    }

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
  },

  async update(request, response) {
    const { challenge_id } = request.params;
    const updatedChallenge = request.body;

    try {
      const challenge = await Challenge.findById(challenge_id);

      if (!challenge) {
        return response.status(404).json({ error: 'Challenge not found.' });
      }

      const challengeSchemaKeys = Object.keys(Challenge.schema.obj);
      challengeSchemaKeys.forEach(challengeSchemaKey => {
        if (challengeSchemaKey !== 'dev_id') {
          challenge[challengeSchemaKey] = updatedChallenge[challengeSchemaKey];
        }
      });

      await challenge.save();

      return response.json(challenge);
    } catch (err) {
      return response.status(500).json({ error: 'Server error.' });
    }
  }
};
