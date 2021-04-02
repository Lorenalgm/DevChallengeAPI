const Developer = require('../../domain/Developer');

class CreateDeveloper {
  constructor(repository) {
    this.developerRepository = repository;
  }

  async run(developerData) {
    const developer = new Developer(developerData);

    return this.developerRepository.create(developer);
  }
}

module.exports = CreateDeveloper;
