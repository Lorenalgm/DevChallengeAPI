const jwt = require('jsonwebtoken');
const { fetchByGitHubId, create } = require('../services/devs.service');
const { requestGithubUserData } = require('../services/github.service');

const authConfig = require('../config/authConfig');

const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400 // 1 day in seconds
  });
};

module.exports = {
  // Keep the login and logout functions on client side
  // by set token on localStorage or remove it
  async oAuthGitHub(request, response) {
    const { code } = request.params;
    if (!code)
      return response.status(400).json({ error: 'Code param is required' });

    const userData = await requestGithubUserData(code);
    if (!userData) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const existingUser = await fetchByGitHubId(userData.githubId);
    if (existingUser) {
      return response.status(200).json({
        userData,
        token: generateToken({ id: userData.githubId })
      });
    }

    await create(userData);
    return response.status(201).send({
      userData,
      token: generateToken({ id: userData.githubId })
    });
  }
};
