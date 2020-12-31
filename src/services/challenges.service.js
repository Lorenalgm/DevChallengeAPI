const Challenge = require('../models/Challenge');

function getFilters(queryString, filtersAllowed) {
  return Object.keys(queryString).reduce((filterPrev, property) => {
    const isFilterAllowed = filtersAllowed.includes(property);
    const isPropertyValueValid = !!queryString[property];
    if (isFilterAllowed && isPropertyValueValid)
      return { ...filterPrev, [property]: queryString[property] };
  },{});
}
module.exports = {
  fetchAll(queryString = {}) {
    const filtersAllowed = ['type', 'level', 'techs'];
    const filter = getFilters(queryString, filtersAllowed);
    return Challenge.find(filter);
  },

  fetchById(challengeId) {
    return Challenge.findById(challengeId).populate('dev_id');
  },

  create(challengeData) {
    return Challenge.create(challengeData);
  }
};
