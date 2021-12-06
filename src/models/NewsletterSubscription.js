const mongoose = require('mongoose');

const NewsletterSubscriptionSchema = new mongoose.Schema(
  {
    email: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  'newsletter_subscriptions',
  NewsletterSubscriptionSchema
);
