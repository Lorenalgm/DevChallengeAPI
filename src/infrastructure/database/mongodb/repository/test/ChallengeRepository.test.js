const { Types, Error } = require('mongoose');

const ChallengeRepository = require('../ChallengeRepository');
const Challenge = require('../../../../../domain/Challenge');

require('./setupTests');

describe('Testing ChallengeRepository', () => {
  const challengeMock = new Challenge({
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
  });

  describe('.created', () => {
    describe('when a invalid challenge object is passed', () => {
      it('throws an ValidationError', async () => {
        try {
          await new ChallengeRepository().create();
        } catch (e) {
          expect(e instanceof Error.ValidationError).toBeTruthy();
        }
      });
    });

    describe('when a valid challenge object is passed', () => {
      it('successfully persists a new challenge', async () => {
        const result = await new ChallengeRepository().create(challengeMock);

        expect(result).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            type: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            level: expect.any(String),
            background: expect.any(String),
            github_url: expect.any(String),
            brief: expect.any(String),
            techs: expect.any(Array),
            images: expect.any(Array)
          })
        );
      });
    });
  });

  describe('.fetchAll', () => {
    describe('when there are no registered challenges', () => {
      it('returns an empty array', async () => {
        const repository = new ChallengeRepository();
        const challenges = await repository.fetchAll();

        expect(challenges).toEqual([]);
      });
    });

    describe('when no filter is provided', () => {
      it('returns all registered challenges', async () => {
        const repository = new ChallengeRepository();

        await repository.create(challengeMock);
        await repository.create(challengeMock);
        await repository.create(challengeMock);

        const challenges = await repository.fetchAll();

        expect(challenges).toHaveLength(3);
      });
    });

    describe('when a filter is provided', () => {
      it('returns the challenges that match the filter', async () => {
        const repository = new ChallengeRepository();

        await repository.create(challengeMock);
        await repository.create(challengeMock);
        await repository.create({ ...challengeMock, type: 'Backend' });

        const challenges = await repository.fetchAll({ type: 'Backend' });

        expect(challenges).toHaveLength(1);
      });
    });
  });

  describe('.fetchById', () => {
    describe('when no id is provided', () => {
      it('returns null', async () => {
        const challenge = await new ChallengeRepository().fetchById();

        expect(challenge).toBeNull();
      });
    });

    describe('when a invalid MongoDB id is provided', () => {
      it('throws an CastError', async () => {
        const repository = new ChallengeRepository();

        try {
          await repository.fetchById('invalid_id');
        } catch (e) {
          expect(e instanceof Error.CastError).toBeTruthy();
        }
      });
    });

    describe('when a valid id is provided', () => {
      describe('and the id does not corresponds to a challenge', () => {
        it('returns null', async () => {
          const id = Types.ObjectId();

          const challenge = await new ChallengeRepository().fetchById(id);

          expect(challenge).toBeNull();
        });
      });

      describe('and the id corresponds to a challenge', () => {
        it('returns a single challenge object', async () => {
          const repository = new ChallengeRepository();
          const { _id: challengeId } = await repository.create(challengeMock);

          const challenge = await repository.fetchById(challengeId);

          expect(challenge).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              type: expect.any(String),
              name: expect.any(String),
              description: expect.any(String),
              level: expect.any(String),
              background: expect.any(String),
              github_url: expect.any(String),
              brief: expect.any(String),
              techs: expect.any(Array),
              images: expect.any(Array)
            })
          );
        });
      });
    });
  });
});
