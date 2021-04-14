/* eslint-disable class-methods-use-this */
const ERR_MESSAGE = 'Method not implemented.';

module.exports = class {
  create() {
    throw new Error(ERR_MESSAGE);
  }

  fetchAll() {
    throw new Error(ERR_MESSAGE);
  }

  fetchById() {
    throw new Error(ERR_MESSAGE);
  }
};
