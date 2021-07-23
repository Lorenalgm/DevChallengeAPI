const axios = require('axios');

const { axiosAdapter } = require('../adapters/axios');

const customAxios = axios.create({ adapter: axiosAdapter });
const githubApi = axios.create({
  adapter: axiosAdapter,
  baseUrl: 'https://api.github.com'
});

module.exports = { axios: customAxios, githubApi };
