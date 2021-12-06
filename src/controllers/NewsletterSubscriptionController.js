const NewsletterSubscription = require('../models/NewsletterSubscription');

module.exports = {
  async index(request, response) {
    const subscriptions = await NewsletterSubscription.find();

    return response.json(subscriptions);
  },

  async store(request, response) {
    const { email } = request.body;

    const subscription = await NewsletterSubscription.create({
      email
    });

    return response.json(subscription);
  }
};
