const mongoose = require('mongoose');

const ChallengeRepository = require('../ChallengeRepository');
const Challenge = require('../../../../../domain/Challenge');
const ChallengeModel = require('../../schemas/Challenge');

describe('Testing ChallengeRepository', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

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
    dev_id: mongoose.Types.ObjectId()
  });

  describe('.create', () => {
    afterAll(() => ChallengeModel.deleteMany({}));

    describe('when a invalid challenge object is passed', () => {
      it('throws an ValidationError', async () => {
        try {
          await new ChallengeRepository().create();
        } catch (e) {
          expect(e instanceof mongoose.Error.ValidationError).toBeTruthy();
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
      beforeAll(() =>
        Promise.all([
          ChallengeModel.create(challengeMock),
          ChallengeModel.create(challengeMock),
          ChallengeModel.create(challengeMock)
        ])
      );

      afterAll(() => ChallengeModel.deleteMany({}));

      it('returns all registered challenges', async () => {
        const repository = new ChallengeRepository();

        const challenges = await repository.fetchAll();

        expect(challenges).toHaveLength(3);
      });
    });

    describe('when a filter is provided', () => {
      beforeAll(() =>
        Promise.all([
          ChallengeModel.create(challengeMock),
          ChallengeModel.create(challengeMock),
          ChallengeModel.create({ ...challengeMock, type: 'Backend' })
        ])
      );

      afterAll(() => ChallengeModel.deleteMany({}));

      it('returns the challenges that match the filter', async () => {
        const repository = new ChallengeRepository();

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
          expect(e instanceof mongoose.Error.CastError).toBeTruthy();
        }
      });
    });

    describe('when a valid id is provided', () => {
      describe('and the id does not corresponds to a challenge', () => {
        it('returns null', async () => {
          const id = mongoose.Types.ObjectId();

          const challenge = await new ChallengeRepository().fetchById(id);

          expect(challenge).toBeNull();
        });
      });

      describe('and the id corresponds to a challenge', () => {
        it('returns a single challenge object', async () => {
          const repository = new ChallengeRepository();

          const { _id: challengeId } = await ChallengeModel.create(
            challengeMock
          );

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
