const axios = require('axios');

const devsService = require('../services/devs.service');
const AuthenticateDevService = require('../modules/devs/services/AuthenticateDevService');

const authConfig = require('../config/auth');

class AuthorizationController {
  constructor() {
    this.clientId = authConfig.oauth2.github.clientId;
    this.secretId = authConfig.oauth2.github.secretId;
    this.scope = 'read:user';
  }

  async getAuthorizationCode(_request, response) {
    response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${this.clientId}&scope=${this.scope}`
    );
  }

  async getAccessToken(request, _response, next) {
    const url = 'https://github.com/login/oauth/access_token';
    const body = {
      client_id: this.clientId,
      client_secret: this.secretId,
      code: request.query.code
    };

    const opts = { headers: { accept: 'application/json' } };

    const {
      data: { access_token: accessToken }
    } = await axios.post(url, body, opts);

    request.user = { accessToken };

    next();
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserProfile(request, _response, next) {
    const { accessToken } = request.user;

    const { data: profile } = await axios.get(`https://api.github.com/user`, {
      headers: { authorization: `token ${accessToken}` }
    });

    request.user = { profile };
    delete request.user.accessToken;

    next();
  }

  // eslint-disable-next-line class-methods-use-this
  async handleUser(request, response) {
    const {
      name,
      email,
      html_url: github,
      id: githubId,
      avatar_url: avatar
    } = request.user.profile;

    delete request.user.profile;

    const existingDev = await devsService.fetchByGitHubId(githubId);

    if (existingDev) {
      // update existing dev's avatar
      request.user.email = existingDev.email;
    } else {
      // check if there is an existing dev with the same email to merge accounts
      const newDev = await devsService.create({
        name,
        email,
        github,
        githubId,
        avatar
      });
      request.user.email = newDev.email;
    }

    const authenticateDev = new AuthenticateDevService();

    const data = await authenticateDev.execute(request.user.email);

    response.json({
      user: data.dev,
      token: data.token
    });
  }
}

module.exports = AuthorizationController;
