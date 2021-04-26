const mongoose = require('mongoose');

const ListChallenges = require('../ListChallenges');
const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

describe('Testing ListChallenges Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new ListChallenges();

      try {
        await useCase.run();
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository dependency is present', () => {
    it('calls ChallengeRepositoryMongo.fetchAll', async () => {
      const repository = new ChallengeRepositoryMongo();
      const spy = jest.spyOn(repository, 'fetchAll');
      await new ListChallenges(repository).run();

      expect(spy).toHaveBeenCalled();
    });
  });
});
