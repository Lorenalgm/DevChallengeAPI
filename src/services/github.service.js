/* eslint-disable camelcase */
const { get, post } = require('../providers/axios');

async function requestGithubUserData(code) {
  const endpoint = 'https://github.com/login/oauth/access_token';

  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  };

  let userInfo;
  try {
    const ghAccessToken = await post(endpoint, {
      body,
      headers: { Accept: 'application/json' }
    });

    const { access_token } = ghAccessToken;
    const response = await get('https://api.github.com/user', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    });

    const { name, bio, html_url, node_id, avatar_url } = response;
    userInfo = {
      name,
      position: '',
      bio,
      linkedin: '',
      github: html_url,
      githubId: node_id,
      avatar: avatar_url
    };
  } catch (error) {
    return error.message;
  }

  return userInfo;
}

module.exports = { requestGithubUserData };
