const ListSubscribers = require('../ListSubscribers');
const NewsletterRepository = require('../../../domain/NewsletterRepository');

jest.mock('../../../domain/NewsletterRepository');

describe('Testing ListSubscribers Use Case', () => {
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
    it('calls NewsletterRepository.fetchAll', async () => {
      const repository = new NewsletterRepository();
      await new ListSubscribers(repository).run();

      expect(repository.fetchAll).toHaveBeenCalled();
    });
  });
});
