const { sign } = require('jsonwebtoken');

const devServices = require('../../../services/devs.service');
const authConfig = require('../../../config/auth');

class AuthenticateDevService {
  // eslint-disable-next-line class-methods-use-this
  async execute(githubId) {
    const dev = await devServices.fetchByGitHubId(githubId);

    if (!dev) {
      throw new Error('dev does not exist.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, { subject: dev.id, expiresIn });

    return { dev, token };
  }
}

module.exports = AuthenticateDevService;
