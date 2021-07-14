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

  async getAccessToken(request, _response, next) {
    const url = 'https://github.com/login/oauth/access_token';
    const body = {
      client_id: this.clientId,
      client_secret: this.secretId,
      code: request.query.code
    };

    console.log('teste');

    const headers = {
      // prettier-disable-next-line
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    try {
      const { data } = await axios.post(
        url,
        {
          client_secret: body.client_secret,
          client_id: body.client_id,
          code: body.code
        },
        headers
      );

      // const { data } = await axios({
      //   method: 'POST',
      //   url,
      //   data: body,
      //   headers
      // });

      if (data.error) {
        _response.status(400).json(data);
        return;
      }

      request.user = data.access_token;
    } catch (e) {
      console.log(e);
      _response.status(500).json(e);
      return;
    }

    next();
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserProfile(request, _response, next) {
    const accessToken = request.user;
    console.log('teste1');

    try {
      const { data: profile } = await axios.get(`https://api.github.com/user`, {
        headers: { Authorization: `token ${accessToken}` }
      });
      request.user = { profile };
    } catch (e) {
      _response.status(500).json(e);
      return;
    }

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

    console.log('teste2');

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

    const data = await authenticateDev.execute(githubId);

    response.json({
      user: data.dev,
      token: data.token
    });
  }
}

module.exports = AuthorizationController;
