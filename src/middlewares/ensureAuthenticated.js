const { verify } = require('jsonwebtoken');

const authConfig = require('../config/auth');
const { unauthorized } = require('../contracts/http-response');

const ensureAuthenticated = (request, response, next) => {
  const authHeader = request.headers.authorization;

  try {
    const [, token] = authHeader.split(' ');

    const { secret } = authConfig.jwt;
    const decoded = verify(token, secret);

    const { sub } = decoded;

    request.user = {
      id: sub
    };

    next();
  } catch (err) {
    response.send(unauthorized());
  }
};

module.exports = { ensureAuthenticated };
