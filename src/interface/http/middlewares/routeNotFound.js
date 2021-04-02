const AppError = require('../../../shared/errors/AppError');

module.exports = req => {
  throw new AppError(
    `The endpoint ${req.method}: ${req.path} could not be found.`,
    404
  );
};
