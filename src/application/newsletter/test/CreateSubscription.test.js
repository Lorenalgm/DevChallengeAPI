const mongoose = require('mongoose');

const CreateSubscription = require('../CreateSubscription');
const NewsletterRepository = require('../../../infrastructure/database/mongodb/repository/NewsletterRepository');
const NewsletterModel = require('../../../infrastructure/database/mongodb/schemas/Newsletter');

describe('Testing CreateSubscription Use Case', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  describe('when the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new CreateSubscription();

      try {
        await useCase.run('test@devchallenge.com');
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('when the repository depependency is present', () => {
    afterAll(() => NewsletterModel.deleteMany({}));

    it('calls NewsletterRepository.create', async () => {
      const repository = new NewsletterRepository();
      const spy = jest.spyOn(repository, 'create');
      await new CreateSubscription(repository).run('test@devchallenge.com');

      expect(spy).toHaveBeenCalled();
    });
  });
});
