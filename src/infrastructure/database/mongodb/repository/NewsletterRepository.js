const Newsletter = require('../schemas/Newsletter');

class NewsletterRepository {
  constructor() {
    this.newsletterModel = Newsletter;
  }

  async fetchAll() {
    const subscribers = await this.newsletterModel.find();
    return subscribers;
  }

  async create(email) {
    const subscriber = await this.newsletterModel.create({ email });
    return subscriber;
  }
}

module.exports = NewsletterRepository;
