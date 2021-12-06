const NewsletterSubscription = require('../models/NewsletterSubscription');

module.exports = {
  async store(request, response) {
    const { email } = request.body;

    const subscription = await NewsletterSubscription.create({
      email
    });

    return response.json(subscription);
  },

  async delete(request, response) {
    const { email } = request.body;

    await NewsletterSubscription.deleteOne({ email });

    return response.sendStatus(204);
  }
};
