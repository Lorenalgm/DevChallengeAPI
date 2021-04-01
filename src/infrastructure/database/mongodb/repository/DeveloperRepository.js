const Developer = require('../schemas/Dev');

class DeveloperRepository {
  constructor() {
    this.developerModel = Developer;
  }

  async fetchAll() {
    const developers = await this.developerModel.find();
    return developers;
  }

  async fetchById(id) {
    const developer = await this.developerModel.findById(id);
    return developer;
  }

  async create(developerData) {
    const developer = await this.developerModel.create(developerData);
    return developer;
  }
}

module.exports = DeveloperRepository;
