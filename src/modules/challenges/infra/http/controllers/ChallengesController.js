const ListChallengesService = require('../../../services/ListChallengesService');
const ShowChallengeService = require('../../../services/ShowChallengeService');
const CreateChallengeService = require('../../../services/CreateChallengeService');

const FilteringEnum = require('../../../../../shared/enums/FilteringEnum');
const Filtering = require('../../../../../shared/utils/Filtering');

class ChallengesController {
  constructor(challengesRepository) {
    this.challengesRepository = challengesRepository;
  }

  async index(request, response) {
    const queryString = request.query;

    const allowedFilters = FilteringEnum.ALLOWED_FILTERS.challenges;
    const filters = Filtering.getFilters(queryString, allowedFilters);

    const listChallenges = new ListChallengesService(this.challengesRepository);

    const challenges = await listChallenges.execute(filters);
    return response.json(challenges);
  }

  async show(request, response) {
    const { challenge_id: id } = request.params;

    const showChallenge = new ShowChallengeService(this.challengesRepository);

    const challenge = await showChallenge.execute(id);

    return response.json(challenge);
  }

  async create(request, response) {
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
    } = request.body;

    const createChallenge = new CreateChallengeService(
      this.challengesRepository
    );

    const challenge = await createChallenge.execute({
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

    return response.json(challenge);
  }
}

module.exports = ChallengesController;
