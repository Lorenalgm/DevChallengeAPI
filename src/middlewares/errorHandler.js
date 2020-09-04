// eslint-disable-next-line no-unused-vars
module.exports = (error, _request, response, _next) => {
  const { status, ...err } = error;

  return response.status(status || 500).send(err);
};
