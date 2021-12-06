const mongoose = require('mongoose');

const ChallengeLikesSchema = new mongoose.Schema(
  {
    challenge_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'challenge'
    },
    dev_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'dev'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('challenge_likes', ChallengeLikesSchema);
