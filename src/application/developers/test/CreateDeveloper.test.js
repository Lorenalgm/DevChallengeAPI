const CreateDeveloper = require('../CreateDeveloper');
const DeveloperRepository = require('../../../domain/DeveloperRepository');

jest.mock('../../../domain/DeveloperRepository');

describe('Testing CreateDeveloper Use Case', () => {
  const developerMock = {
    name: 'John Doe',
    position: 'QA',
    bio: 'Drop a mine on the pipeline!',
    linkedin: 'in/thejohndoe',
    github: 'thejohndoe',
    avatar: 'avatar_url'
  };

  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new CreateDeveloper();

      try {
        await useCase.run(developerMock);
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository depependency is present', () => {
    it('calls DeveloperRepository.create', async () => {
      const repository = new DeveloperRepository();
      await new CreateDeveloper(repository).run(developerMock);

      expect(repository.create).toHaveBeenCalled();
    });
  });
});
