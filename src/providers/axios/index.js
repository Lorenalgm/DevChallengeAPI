const { httpRequest } = require('./httpRequests');

module.exports = { get: httpRequest.get, post: httpRequest.post };
