const axios = require('axios');

const { axiosAdapter } = require('../adapters/axios');

const customAxios = axios.create({ adapter: axiosAdapter });
module.exports = customAxios;
