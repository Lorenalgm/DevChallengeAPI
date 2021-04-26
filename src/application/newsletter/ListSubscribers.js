const NewsletterRepository = require('../../domain/NewsletterRepository');

class ListSubscribers {
  constructor(repository = new NewsletterRepository()) {
    this.newsletterRepository = repository;
  }

  async run() {
    return this.newsletterRepository.fetchAll();
  }
}

module.exports = ListSubscribers;
