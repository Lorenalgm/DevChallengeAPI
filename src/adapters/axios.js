const httpAdapter = require('axios/lib/adapters/http');
const settle = require('axios/lib/core/settle');
const { badRequest, internalError, ok } = require('../contracts/http-response');

const axiosAdapter = configs => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await httpAdapter(configs);

      switch (response.status) {
        case 200:
        case 202:
          settle(resolve, reject, ok(response.data));
          break;

        case 400:
          settle(resolve, reject, badRequest(response.data));

        case 500:
        case 503:
          settle(resolve, reject, internalError(response.data));

        default:
          break;
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = axiosAdapter;
