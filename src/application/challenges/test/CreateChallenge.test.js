const mongoose = require('mongoose');

const CreateChallenge = require('../CreateChallenge');
const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');
const ChallengeModel = require('../../../infrastructure/database/mongodb/schemas/Challenge');

describe('Testing CreateChallenge Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  const challenge = {
    type: 'Frontend',
    name: 'placeholder',
    description: 'placeholder',
    level: 'placeholder',
    techs: 'placeholder',
    background: 'placeholder',
    images: ['placeholder'],
    github_url: 'placeholder',
    brief: 'placeholder',
    dev_id: mongoose.Types.ObjectId()
  };

  describe('if the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new CreateChallenge();

      try {
        await useCase.run(challenge);
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('if the repository dependency is present', () => {
    afterAll(() => ChallengeModel.deleteMany({}));

    it('calls ChallengeRepositoryMongo.create', async () => {
      const repository = new ChallengeRepositoryMongo();
      const spy = jest.spyOn(repository, 'create');
      await new CreateChallenge(repository).run(challenge);

      expect(spy).toHaveBeenCalled();
    });
  });
});
