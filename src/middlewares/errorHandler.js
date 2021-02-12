const AppError = require('../shared/errors/AppError');

// eslint-disable-next-line no-unused-vars
function errorHandler(error, _request, response, _next) {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode)
      .json({ status: 'error', message: error.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
}

module.exports = errorHandler;
