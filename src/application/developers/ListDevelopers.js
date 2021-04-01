class ListDevelopers {
  constructor(repository) {
    this.developerRepository = repository;
  }

  async run() {
    const developers = await this.developerRepository.fetchAll();
    return developers;
  }
}

module.exports = ListDevelopers;
