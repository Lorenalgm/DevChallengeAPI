const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    bio: String,
    username: String,
    linkedin: String,
    githubId: String,
    avatar: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Dev', DevSchema);
