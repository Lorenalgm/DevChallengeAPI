const NewsletterSubscription = require('../models/NewsletterSubscription');

module.exports = {
  async store(request, response) {
    const { email } = request.body;

    let subscription = await NewsletterSubscription.findOne({ email });

    if (!subscription) {
      subscription = await NewsletterSubscription.create({ email });
      return response.status(201).json({ email: subscription.email });
    }

    return response.status(200).json({ email: subscription.email });
  },

  async delete(request, response) {
    const { email } = request.body;

    await NewsletterSubscription.deleteOne({ email });

    return response.sendStatus(204);
  }
};
