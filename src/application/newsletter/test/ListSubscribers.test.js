const mongoose = require('mongoose');

const ListSubscribers = require('../ListSubscribers');
const NewsletterRepository = require('../../../infrastructure/database/mongodb/repository/NewsletterRepository');
const NewsletterModel = require('../../../infrastructure/database/mongodb/schemas/Newsletter');

describe('Testing ListSubscribers Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new ListSubscribers();

      try {
        await useCase.run();
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository depependency is present', () => {
    afterAll(() => NewsletterModel.deleteMany({}));

    it('calls NewsletterRepository.fetchAll', async () => {
      const repository = new NewsletterRepository();
      const spy = jest.spyOn(repository, 'fetchAll');
      await new ListSubscribers(repository).run();

      expect(spy).toHaveBeenCalled();
    });
  });
});
