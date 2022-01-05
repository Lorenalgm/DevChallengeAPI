const axios = require('axios');

async function httpRequest(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    url: endpoint,
    method: customConfig.method,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) {
    config.data = body;
  }

  let data;
  try {
    const response = await axios(config);

    if (response) {
      data = response.data;
      return data;
    }

    throw new Error(response.statusText);
  } catch (error) {
    return Promise.reject(error.message ? error.message : data);
  }
}

httpRequest.get = (endpoint, customConfig = {}) => {
  return httpRequest(endpoint, { ...customConfig, method: 'GET' });
};

httpRequest.post = (endpoint, customConfig = {}) => {
  return httpRequest(endpoint, { ...customConfig, method: 'POST' });
};

module.exports = { httpRequest };
