const mongoose = require('mongoose');

const NewsletterRepository = require('../NewsletterRepository');
const NewsletterModel = require('../../schemas/Newsletter');

describe('Testing NewsletterRepository', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  describe('.fetchAll', () => {
    describe('when there are no subscribers', () => {
      it('returns an empty array', async () => {
        const repository = new NewsletterRepository();
        const subscribers = await repository.fetchAll();

        expect(subscribers).toEqual([]);
      });
    });

    describe('when there are subscribers', () => {
      beforeAll(() =>
        Promise.all([
          NewsletterModel.create({ email: 'john.doe@email.com' }),
          NewsletterModel.create({ email: 'jane.doe@email.net' }),
          NewsletterModel.create({ email: 'dev.test@domain.com' })
        ])
      );

      afterAll(() => NewsletterModel.deleteMany({}));

      it('returns an array of the newsletter subscribers', async () => {
        const repository = new NewsletterRepository();

        const subscribers = await repository.fetchAll();

        expect(subscribers).toHaveLength(3);
      });
    });
  });

  describe('.create', () => {
    afterAll(() => NewsletterModel.deleteMany({}));

    describe('when no email is provided', () => {
      it('throws and ValidationError', async () => {
        const repository = new NewsletterRepository();

        try {
          await repository.create();
        } catch (e) {
          expect(e instanceof mongoose.Error.ValidationError).toBeTruthy();
        }
      });
    });

    describe('when a email is provided', () => {
      it('successfully registers a new subscription', async () => {
        const repository = new NewsletterRepository();
        const subscription = await repository.create('john.doe@email.com');

        expect(subscription).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            email: 'john.doe@email.com'
          })
        );
      });
    });
  });
});
