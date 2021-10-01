module.exports = (request, _response, next) => {
  return next({
    status: 404,
    message: 'Not found.',
    error: 'Resource not found.',
    details: {
      path: `The endpoint ${request.method}: ${request.path} could not be found.`
    }
  });
};
