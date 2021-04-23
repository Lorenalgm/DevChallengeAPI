const mongoose = require('mongoose');

const CreateChallenge = require('../CreateChallenge');
const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

beforeAll(async () => {
  const url = process.env.MONGO_URL;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Testing CreateChallenge Use Case', () => {
  const challenge = {
    type: 'placeholder',
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
    it('calls ChallengeRepositoryMongo.create', async () => {
      const repository = new ChallengeRepositoryMongo();
      const spy = jest.spyOn(repository, 'create');
      await new CreateChallenge(repository).run(challenge);

      expect(spy).toHaveBeenCalled();
    });
  });
});
