class CreateSubscription {
  constructor(repository) {
    this.newsletterRepository = repository;
  }

  async run(email) {
    const subscriber = await this.newsletterRepository.create(email);
    return subscriber;
  }
}

module.exports = CreateSubscription;
