const Dev = require('../models/Dev');

async function fetchAll() {
  const devs = Dev.find({});
  return devs;
}

async function fetchById(devId) {
  const dev = await Dev.findById(devId);
  return dev;
}

async function fetchByGitHubId(githubId) {
  const dev = await Dev.findOne({ githubId });
  return dev;
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
