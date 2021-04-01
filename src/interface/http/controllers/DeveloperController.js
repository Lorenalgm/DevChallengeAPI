const ApplicationController = require('./ApplicationController');

const DeveloperRepository = require('../../../infrastructure/database/mongodb/repository/DeveloperRepository');

const ListDevelopers = require('../../../application/developers/ListDevelopers');

class DeveloperController extends ApplicationController {
  async list() {
    const repository = new DeveloperRepository();

    const developers = await new ListDevelopers(repository).run();

    //! Data must be serialized.
    return this.res.status(200).send(developers);
  }
}

module.exports = DeveloperController;
