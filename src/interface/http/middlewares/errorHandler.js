const { Error: MongooseError } = require('mongoose');

const AppError = require('../../../shared/errors/AppError');

// eslint-disable-next-line no-unused-vars
function errorHandler(error, _request, response, _next) {
  switch (error instanceof Error) {
    case error instanceof AppError:
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    case error instanceof MongooseError.ValidationError:
      return response
        .status(400)
        .json({ status: 'error', message: error.message });
    default:
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
  }
}

module.exports = errorHandler;
