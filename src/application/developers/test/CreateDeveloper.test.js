const mongoose = require('mongoose');

const CreateDeveloper = require('../CreateDeveloper');
const DeveloperRepository = require('../../../infrastructure/database/mongodb/repository/DeveloperRepository');
const DeveloperModel = require('../../../infrastructure/database/mongodb/schemas/Dev');

describe('Testing CreateDeveloper Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

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
    afterAll(() => DeveloperModel.deleteMany({}));

    it('calls DeveloperRepository.create', async () => {
      const repository = new DeveloperRepository();
      const spy = jest.spyOn(repository, 'create');
      await new CreateDeveloper(repository).run(developerMock);

      expect(spy).toHaveBeenCalled();
    });
  });
});
