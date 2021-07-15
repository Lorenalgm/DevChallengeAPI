const { oauth2 } = require('../config/auth');

const customAxios = require('../config/customAxios');
const { badRequest } = require('../contracts/http-response');

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

    try {
      const { data } = await customAxios({
        method: 'POST',
        url,
        headers,
        data: body
      });
      return data;
    } catch (e) {
      return badRequest(e);
    }
  };

  getUserProfile = async access_token => {
    const { data } = await customAxios.get(`https://api.github.com/user`, {
      headers: { Authorization: `token ${access_token}` }
    });

    return data;
  };
};
