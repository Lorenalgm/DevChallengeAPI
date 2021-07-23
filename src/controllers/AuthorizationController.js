const devsService = require('../services/devs.service');
const AuthenticateDevService = require('../modules/devs/services/AuthenticateDevService');

const GithubService = require('../services/github.service');

const { badRequest } = require('../contracts/http-response');

class AuthorizationController {
  constructor() {
    this.githubService = new GithubService();
  }

  async authenticateUser(request, response, next) {
    const token = await this.githubService.getAccessToken(request.query.code);

    if (token.error) {
      response.send(token);
      return;
    }

    request.access_token = token.data;
    next();
  }

  // // eslint-disable-next-line class-methods-use-this
  async handleUserData(request, _response, next) {
    const { access_token: accessToken } = request;

    delete request.access_token;

    const userPrimaryEmail = await this.githubService.getUserPrimaryEmail(
      accessToken
    );
    const existingDev = await devsService.fetchByEmail(userPrimaryEmail);

    if (!existingDev) {
      const {
        name,
        github,
        githubId,
        avatar
      } = this.githubService.getUserProfile(accessToken);

      await devsService.create({
        name,
        email: userPrimaryEmail,
        github,
        githubId,
        avatar
      });
    }

    const authenticateDev = new AuthenticateDevService();
    try {
      const token = await authenticateDev.execute(userPrimaryEmail);
      request.token = token;
      next();
    } catch (e) {
      request.send(badRequest(e));
    }
  }
}

module.exports = AuthorizationController;
