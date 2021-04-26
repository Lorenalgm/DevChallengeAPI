const mongoose = require('mongoose');

const ListDevelopers = require('../ListDevelopers');
const DeveloperRepository = require('../../../infrastructure/database/mongodb/repository/DeveloperRepository');

describe('Testing CreateDeveloper Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

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
      const spy = jest.spyOn(repository, 'fetchAll');
      await new ListDevelopers(repository).run();

      expect(spy).toHaveBeenCalled();
    });
  });
});
