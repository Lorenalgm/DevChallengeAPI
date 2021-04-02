class ListDevelopers {
  constructor(repository) {
    this.developerRepository = repository;
  }

  async run() {
    return this.developerRepository.fetchAll();
  }
}

module.exports = ListDevelopers;
