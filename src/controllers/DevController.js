const devsService = require('../services/devs.service');

module.exports = {
  async index(request, response) {
    const devs = await devsService.fetchAll();

    return response.json(devs);
  },

  async store(request, response) {
    const {
      name,
      position,
      bio,
      linkedin,
      github,
      githubId,
      avatar
    } = request.body;

    const dev = await devsService.create({
      name,
      position,
      bio,
      linkedin,
      github,
      githubId,
      avatar
    });

    return response.json(dev);
  }
};
