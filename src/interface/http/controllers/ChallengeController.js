const ApplicationController = require('./ApplicationController');

/*
  ! The repository MUST NOT be utilized directly from the controller.
  ! Instead, it must be injected and executed on the application layer.
*/

const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

const ListChallenges = require('../../../application/challenges/ListChallenges');
const ShowChallenge = require('../../../application/challenges/ShowChallenge');
const CreateChallenge = require('../../../application/challenges/CreateChallenge');

const { ALLOWED_FILTERS } = require('../../../shared/enums/FilteringEnum');
const { getFilters } = require('../../../shared/utils/Filtering');

class ChallengeController extends ApplicationController {
  async index() {
    const queryString = this.req.query;

    const repository = new ChallengeRepositoryMongo();

    const allowedFilters = ALLOWED_FILTERS.challenges;
    const filters = getFilters(queryString, allowedFilters);

    const challenge = await new ListChallenges(repository).run(filters);

    //! Data needs to be serialized before sending the result.
    return this.res.status(200).send(challenge);
  }

  async show() {
    const { challenge_id: id } = this.req.params;

    const repository = new ChallengeRepositoryMongo();

    const challenge = await new ShowChallenge(repository).run(id);

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

    const repository = new ChallengeRepositoryMongo();

    const challenge = await new CreateChallenge(repository).run({
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
