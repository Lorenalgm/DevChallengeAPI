const { sign } = require('jsonwebtoken');

const devServices = require('../../../services/devs.service');
const authConfig = require('../../../config/auth');

class AuthenticateDevService {
  // eslint-disable-next-line class-methods-use-this
  async execute(email) {
    const dev = await devServices.fetchByEmail(email);

    if (!dev) {
      throw new Error('dev does not exist.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(dev, secret, { subject: dev.id, expiresIn });

    return token;
  }
}

module.exports = AuthenticateDevService;
