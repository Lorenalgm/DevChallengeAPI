const Dev = require('../models/Dev');

async function fetchAll() {
  return Dev.find({});
}

async function fetchById(devId) {
  return Dev.findById(devId);
}

async function fetchByGitHubId(githubId) {
  return Dev.findOne({ githubId });
}

async function create(devData) {
  const { githubId } = devData;

  const devExists = await fetchByGitHubId(githubId);

  if (devExists) {
    return devExists;
  }
  return Dev.create(devData);
}

module.exports = { fetchAll, fetchById, fetchByGitHubId, create };
