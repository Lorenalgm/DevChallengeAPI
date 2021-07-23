const httpAdapter = require('axios/lib/adapters/http');
const settle = require('axios/lib/core/settle');
const { badRequest, internalError, ok } = require('../contracts/http-response');

const axiosAdapter = configs => {
  return new Promise((resolve, reject) => {
    httpAdapter(configs)
      .then(response => {
        switch (response.status) {
          case 200:
          case 202:
            settle(resolve, reject, ok(response.data));
            break;

          case 400:
            settle(resolve, reject, badRequest(response.data));
            break;

          case 500:
          case 503:
            settle(resolve, reject, internalError(response.data));
            break;

          default:
            break;
        }
      })
      .catch(reason => settle(resolve, reject, internalError(reason)));
  });
};

module.exports = axiosAdapter;
