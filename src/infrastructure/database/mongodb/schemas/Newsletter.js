const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Newsletter', NewsletterSchema);
