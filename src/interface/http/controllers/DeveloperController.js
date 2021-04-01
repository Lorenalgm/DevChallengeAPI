const ApplicationController = require('./ApplicationController');

const DeveloperRepository = require('../../../infrastructure/database/mongodb/repository/DeveloperRepository');

const ListDevelopers = require('../../../application/developers/ListDevelopers');
const CreateDeveloper = require('../../../application/developers/CreateDeveloper');

class DeveloperController extends ApplicationController {
  async list() {
    const repository = new DeveloperRepository();

    const developers = await new ListDevelopers(repository).run();

    //! Data must be serialized.
    return this.res.status(200).send(developers);
  }

  async create() {
    const {
      name,
      position,
      bio,
      linkedin,
      github,
      githubId,
      avatar
    } = this.req.body;

    const repository = new DeveloperRepository();

    const developer = await new CreateDeveloper(repository).run({
      name,
      position,
      bio,
      linkedin,
      github,
      githubId,
      avatar
    });

    //! Data must be serialized
    return this.res.status(201).send(developer);
  }
}

module.exports = DeveloperController;
