const DeveloperRepository = require('../../domain/DeveloperRepository');

class ListDevelopers {
  constructor(repository = new DeveloperRepository()) {
    this.developerRepository = repository;
  }

  async run() {
    return this.developerRepository.fetchAll();
  }
}

module.exports = ListDevelopers;
