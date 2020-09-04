const Challenge = require('../models/Challenge');

module.exports = {
  fetchAll(type = undefined) {
    if (type) {
      return Challenge.find({ type });
    }

    return Challenge.find();
  },

  fetchById(challengeId) {
    return Challenge.findById(challengeId).populate('dev_id');
  },

  create(challengeData) {
    return Challenge.create(challengeData);
  }
};
