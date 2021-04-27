const ShowChallenge = require('../ShowChallenge');
const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

jest.mock(
  '../../../infrastructure/database/mongodb/repository/ChallengeRepository'
);

describe('Testing ShowChallenge Use Case', () => {
  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new ShowChallenge();

      try {
        await useCase.run();
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository dependency is present', () => {
    it('calls ChallengeRepositoryMongo.fetchById', async () => {
      const repository = new ChallengeRepositoryMongo();
      await new ShowChallenge(repository).run();

      expect(repository.fetchById).toHaveBeenCalled();
    });
  });
});
