const ok = data => ({
  isError: false,
  statusCode: 200,
  data
});

const unauthorized = () => ({
  isError: true,
  statusCode: 401,
  data: 'Unauthorized'
});

const badRequest = error => ({
  isError: true,
  statusCode: 400,
  data: error
});

const forbidden = error => ({
  isError: true,
  statusCode: 403,
  data: error
});

const internalError = error => ({
  isError: true,
  statusCode: 500,
  data: error
});

module.exports = {
  ok,
  internalError,
  badRequest,
  forbidden,
  unauthorized
};
