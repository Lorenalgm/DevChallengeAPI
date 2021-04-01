const ApplicationController = require('./ApplicationController');

/*
  ! The repository MUST NOT be utilized directly from the controller.
  ! Instead, it must be injected and executed on the application layer.
*/

const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

class ChallengeController extends ApplicationController {
  async index() {
    const queryString = this.req.query;

    // TODO: Apply correct filtering.
    const challenge = await new ChallengeRepositoryMongo().fetchAll(
      queryString
    );

    //! Data needs to be serialized before sending the result.
    return this.res.status(200).send(challenge);
  }

  async show() {
    const { challenge_id: id } = this.req.params;

    const challenge = await new ChallengeRepositoryMongo().fetchById(id);

    return this.res.status(200).send(challenge);
  }

  async create() {
    const {
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url: githubUrl,
      brief,
      dev_id: devId
    } = this.req.body;

    const challenge = await new ChallengeRepositoryMongo().create({
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url: githubUrl,
      brief,
      dev_id: devId
    });

    return this.res.status(201).send(challenge);
  }
}

module.exports = ChallengeController;
