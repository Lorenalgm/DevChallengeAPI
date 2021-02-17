const { verify } = require('jsonwebtoken');

const authConfig = require('../config/auth');
const AppError = require('../shared/errors/AppError');

const ensureAuthenticated = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT is missing from the headers', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { secret } = authConfig.jwt;
    const decoded = verify(token, secret);

    const { sub } = decoded;

    request.user = {
      id: sub
    };

    next();
  } catch (err) {
    throw new AppError('Invalid JWT', 401);
  }
};

module.exports = { ensureAuthenticated };
