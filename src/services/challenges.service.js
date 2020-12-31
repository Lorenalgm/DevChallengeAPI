const Challenge = require('../models/Challenge');

module.exports = {
  fetchAll(queryString = {}) {
    const filter = {};
    const filterAllowed = ['type', 'level', 'techs'];
    Object.keys(queryString).map(property => {
      const canFilter =
        filterAllowed.includes(property) && !!queryString[property];
      if (canFilter) filter[property] = queryString[property];
    });
    return Challenge.find(filter);
  },

  fetchById(challengeId) {
    return Challenge.findById(challengeId).populate('dev_id');
  },

  create(challengeData) {
    return Challenge.create(challengeData);
  }
};
