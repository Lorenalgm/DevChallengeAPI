const Developer = require('../../domain/Developer');
const DeveloperRepository = require('../../domain/DeveloperRepository');

class CreateDeveloper {
  constructor(repository = new DeveloperRepository()) {
    this.developerRepository = repository;
  }

  async run(developerData) {
    const developer = new Developer(developerData);

    return this.developerRepository.create(developer);
  }
}

module.exports = CreateDeveloper;
