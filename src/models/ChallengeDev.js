const mongoose = require('mongoose');

const ChallengeDevSchema = new mongoose.Schema(
  {
    start_date: Date,
    end_date: Date,
    solution_url: String,
    challenge_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
      },
    dev_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dev'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('ChallengeDev', ChallengeDevSchema);
