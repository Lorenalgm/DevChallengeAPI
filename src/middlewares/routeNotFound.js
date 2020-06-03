module.exports = (request, _response, next) => {
  return next({
    status: 404,
    error: 'Route not found.',
    details: {
      resource: `The resource ${request.path} could not be found.`,
    }
  });
}