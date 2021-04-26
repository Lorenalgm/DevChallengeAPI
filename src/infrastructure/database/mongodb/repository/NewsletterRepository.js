const Newsletter = require('../schemas/Newsletter');

class NewsletterRepository {
  constructor() {
    this.newsletterModel = Newsletter;
  }

  async fetchAll() {
    const subscribers = await this.newsletterModel.find();
    return subscribers;
  }

  async create(subscriberData) {
    const subscriber = await this.newsletterModel.create(subscriberData);
    return subscriber;
  }
}

module.exports = NewsletterRepository;
