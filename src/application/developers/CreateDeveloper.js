class CreateDeveloper {
  constructor(repository) {
    this.developerRepository = repository;
  }

  async run(developerData) {
    const developer = await this.developerRepository.create(developerData);
    return developer;
  }
}

module.exports = CreateDeveloper;
