const NewsletterSubscription = require('../models/NewsletterSubscription');

module.exports = {
  async store(request, response, next) {
    const { email } = request.body;

    if (!email || !email.trim()) {
      return next({
        status: 400,
        errors: { email: 'This field is required.' }
      });
    }

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
