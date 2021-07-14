const { oauth2 } = require('../config/auth');
// import { badRequest, internalError, ok } from '../contracts/http-response';

const customAxios = require('../config/customAxios');

module.exports = class GithubService {
  getAccessToken = async temporaryCode => {
    const url = 'https://github.com/login/oauth/access_token';
    const body = {
      client_id: oauth2.github.clientId,
      client_secret: oauth2.github.secretId,
      code: temporaryCode
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const { data } = await customAxios({
      method: 'POST',
      url,
      headers,
      data: body
    });

    return data;
  };

  getUserProfile = async access_token => {
    const { data } = await customAxios.get(`https://api.github.com/user`, {
      headers: { Authorization: `token ${access_token}` }
    });

    return data;
  };
};
