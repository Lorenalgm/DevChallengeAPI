const Container = require('./Container');

const ChallengesRepository = require('../../modules/challenges/infra/mongoose/repositories/ChallengesRepository');

const container = new Container();

container.registerSingleton('ChallengesRepository', ChallengesRepository);

module.exports = container;
