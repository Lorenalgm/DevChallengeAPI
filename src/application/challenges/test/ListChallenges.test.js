const ListChallenges = require('../ListChallenges');
const ChallengeRepositoryMongo = require('../../../infrastructure/database/mongodb/repository/ChallengeRepository');

jest.mock(
  '../../../infrastructure/database/mongodb/repository/ChallengeRepository'
);

describe('Testing ListChallenges Use Case', () => {
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
      await new ListChallenges(repository).run();

      expect(repository.fetchAll).toHaveBeenCalled();
    });
  });
});
