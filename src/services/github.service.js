const { oauth2 } = require('../config/auth');

const { axios, githubAxios } = require('../config/customAxios');
const { badRequest } = require('../contracts/http-response');

class GithubService {
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
      const { data } = await axios({
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
    const { data } = await githubAxios.get(`/user`, {
      headers: { Authorization: `bearer ${access_token}` }
    });

    return data;
  };

  getUserPrimaryEmail = async access_token => {
    const { data } = await githubAxios.get('/user/emails', {
      headers: {
        Authorization: `bearer ${access_token}`
      }
    });

    const currentEmail = data.find(currentEmail => currentEmail.primary);

    return currentEmail;
  };
}

module.exports = GithubService;
