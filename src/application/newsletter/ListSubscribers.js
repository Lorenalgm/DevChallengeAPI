class ListSubscribers {
  constructor(repository) {
    this.newsletterRepository = repository;
  }

  async run() {
    const subscribers = await this.newsletterRepository.fetchAll();
    return subscribers;
  }
}

module.exports = ListSubscribers;
