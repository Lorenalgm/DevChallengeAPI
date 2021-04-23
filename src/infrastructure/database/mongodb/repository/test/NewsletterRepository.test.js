const { Error } = require('mongoose');

const NewsletterRepository = require('../NewsletterRepository');

require('./setupTests');

describe('Testing NewsletterRepository', () => {
  describe('.fetchAll', () => {
    describe('when there are no subscribers', () => {
      it('returns an empty array', async () => {
        const repository = new NewsletterRepository();
        const subscribers = await repository.fetchAll();

        expect(subscribers).toEqual([]);
      });
    });

    describe('when there are subscribers', () => {
      it('returns an array of the newsletter subscribers', async () => {
        const repository = new NewsletterRepository();

        await repository.create('john.doe@email.com');
        await repository.create('jane.doe@email.net');
        await repository.create('dev.test@domain.com');

        const subscribers = await repository.fetchAll();

        expect(subscribers).toHaveLength(3);
      });
    });
  });

  describe('.create', () => {
    describe('when no email is provided', () => {
      it('throws and ValidationError', async () => {
        const repository = new NewsletterRepository();

        try {
          await repository.create();
        } catch (e) {
          expect(e instanceof Error.ValidationError).toBeTruthy();
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
