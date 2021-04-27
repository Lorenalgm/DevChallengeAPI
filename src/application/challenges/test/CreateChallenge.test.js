const { Types } = require('mongoose');

const CreateChallenge = require('../CreateChallenge');
const ChallengeRepositoryMongo = require('../../../domain/ChallengeRepository');

jest.mock('../../../domain/ChallengeRepository');

describe('Testing CreateChallenge Use Case', () => {
  const challenge = {
    type: 'Frontend',
    name: 'placeholder',
    description: 'placeholder',
    level: 'placeholder',
    techs: 'placeholder',
    background: 'placeholder',
    images: ['placeholder'],
    github_url: 'placeholder',
    brief: 'placeholder',
    dev_id: Types.ObjectId()
  };

  describe('if the repository dependency is not present', () => {
    it('throws an error', async () => {
      const useCase = new CreateChallenge();

      try {
        await useCase.run(challenge);
      } catch (e) {
        expect(e).toEqual(new Error('Method not implemented.'));
      }
    });
  });

  describe('if the repository dependency is present', () => {
    it('calls ChallengeRepositoryMongo.create', async () => {
      const repository = new ChallengeRepositoryMongo();
      await new CreateChallenge(repository).run(challenge);

      expect(repository.create).toHaveBeenCalled();
    });
  });
});
