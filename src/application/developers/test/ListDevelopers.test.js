const ListDevelopers = require('../ListDevelopers');
const DeveloperRepository = require('../../../infrastructure/database/mongodb/repository/DeveloperRepository');

jest.mock(
  '../../../infrastructure/database/mongodb/repository/DeveloperRepository'
);

describe('Testing CreateDeveloper Use Case', () => {
  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new ListDevelopers();

      try {
        await useCase.run();
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository depependency is present', () => {
    it('calls DeveloperRepository.fetchAll', async () => {
      const repository = new DeveloperRepository();
      await new ListDevelopers(repository).run();

      expect(repository.fetchAll).toHaveBeenCalled();
    });
  });
});
