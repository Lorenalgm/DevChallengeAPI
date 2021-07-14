const devsService = require('../services/devs.service');
const AuthenticateDevService = require('../modules/devs/services/AuthenticateDevService');

const authConfig = require('../config/auth');
const GithubService = require('../services/github.service');

class AuthorizationController {
  constructor() {
    this.clientId = authConfig.oauth2.github.clientId;
    this.secretId = authConfig.oauth2.github.secretId;
    this.scope = 'read:user';

    this.githubService = new GithubService();
  }

  async authenticateUser(request, response) {
    const token = await this.githubService.getAccessToken(request.query.code);

    if (token.error) {
      response.send(token);
      return;
    }

    const userProfile = await this.githubService.getUserProfile(
      token.access_token
    );

    response.send(userProfile);
  }

  // // eslint-disable-next-line class-methods-use-this
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

    const data = await authenticateDev.execute(githubId);

    response.json({
      user: data.dev,
      token: data.token
    });
  }
}

module.exports = AuthorizationController;
