const Newsletter = require('../../domain/Newsletter');
const NewsletterRepository = require('../../domain/NewsletterRepository');

class CreateSubscription {
  constructor(repository = new NewsletterRepository()) {
    this.newsletterRepository = repository;
  }

  async run(email) {
    const subscriber = new Newsletter(email);

    return this.newsletterRepository.create(subscriber);
  }
}

module.exports = CreateSubscription;
