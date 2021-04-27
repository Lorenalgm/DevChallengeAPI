const CreateSubscription = require('../CreateSubscription');
const NewsletterRepository = require('../../../infrastructure/database/mongodb/repository/NewsletterRepository');

jest.mock(
  '../../../infrastructure/database/mongodb/repository/NewsletterRepository'
);

describe('Testing CreateSubscription Use Case', () => {
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
    it('calls NewsletterRepository.create', async () => {
      const repository = new NewsletterRepository();
      await new CreateSubscription(repository).run('test@devchallenge.com');

      expect(repository.create).toHaveBeenCalled();
    });
  });
});
