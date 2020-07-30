module.exports = (error, _request, response, next) => {
  const { status, ...err } = error;

  return response.status(status || 500).send(err);
};
