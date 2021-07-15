const devsService = require('../services/devs.service');
const AuthenticateDevService = require('../modules/devs/services/AuthenticateDevService');

const GithubService = require('../services/github.service');

class AuthorizationController {
  constructor() {
    this.githubService = new GithubService();
  }

  async authenticateUser(request, response, next) {
    const token = await this.githubService.getAccessToken(request.query.code);

    console.log(token);

    if (token.error) {
      response.send(token);
      return;
    }

    console.log(token);

    const userProfile = await this.githubService.getUserProfile(
      token.access_token
    );

    request.user = userProfile;

    // response.send(userProfile);
    next();
  }

  // // eslint-disable-next-line class-methods-use-this
  async handleUser(request, response) {
    const {
      name,
      email,
      html_url: github,
      id: githubId,
      avatar_url: avatar
    } = request.user;

    delete request.user;

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
