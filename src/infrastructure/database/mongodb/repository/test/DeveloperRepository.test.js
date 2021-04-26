const mongoose = require('mongoose');

const DeveloperRepository = require('../DeveloperRepository');
const Developer = require('../../../../../domain/Developer');
const DeveloperModel = require('../../schemas/Dev');

describe('Testing DeveloperRepository', () => {
  beforeAll(() =>
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );

  afterAll(() => mongoose.connection.close());

  const developerMock = new Developer({
    name: 'John Doe',
    position: 'QA',
    bio: 'Drop a mine on the pipeline!',
    linkedin: 'in/thejohndoe',
    github: 'thejohndoe',
    avatar: 'avatar_url'
  });

  describe('.fetchAll', () => {
    describe('when there are no developers registered', () => {
      it('returns an empty array', async () => {
        const repository = new DeveloperRepository();
        const devs = await repository.fetchAll();

        expect(devs).toEqual([]);
      });
    });

    describe('when there are developers registered', () => {
      beforeAll(() =>
        Promise.all([
          DeveloperModel.create(developerMock),
          DeveloperModel.create(developerMock),
          DeveloperModel.create(developerMock)
        ])
      );

      afterAll(() => DeveloperModel.deleteMany({}));

      it('returns the registered developers', async () => {
        const repository = new DeveloperRepository();

        const devs = await repository.fetchAll();

        expect(devs).toHaveLength(3);
      });
    });
  });

  describe('.fetchById', () => {
    describe('when no id is provided', () => {
      it('returns null', async () => {
        const repository = new DeveloperRepository();
        const dev = await repository.fetchById();

        expect(dev).toBeNull();
      });
    });

    describe('when a invalid MongoDB id is provided', () => {
      it('throws an CastError', async () => {
        const repository = new DeveloperRepository();

        try {
          await repository.fetchById();
        } catch (e) {
          expect(e instanceof mongoose.Error.CastError).toBeTruthy();
        }
      });
    });

    describe('when a valid id is provided', () => {
      describe('and the id does not corresponds to a developer', () => {
        it('returns null', async () => {
          const repository = new DeveloperRepository();
          const dev = await repository.fetchById(mongoose.Types.ObjectId());

          expect(dev).toBeNull();
        });
      });

      describe('and the id corresponds to a developer', () => {
        it('returns a single developer object', async () => {
          const repository = new DeveloperRepository();

          const { _id: devId } = await DeveloperModel.create(developerMock);

          const developer = await repository.fetchById(devId);

          expect(developer).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
              position: expect.any(String),
              bio: expect.any(String),
              linkedin: expect.any(String),
              github: expect.any(String),
              avatar: expect.any(String)
            })
          );
        });
      });
    });
  });

  describe('.create', () => {
    afterAll(() => DeveloperModel.deleteMany({}));

    describe('when a invalid developer object is passed', () => {
      it('throws an ValidationError', async () => {
        const repository = new DeveloperRepository();

        try {
          await repository.create();
        } catch (e) {
          expect(e instanceof mongoose.Error.ValidationError).toBeTruthy();
        }
      });
    });

    describe('when a valid developer object is passed', () => {
      it('successfully persists a new developer', async () => {
        const developer = await new DeveloperRepository().create(developerMock);

        expect(developer).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            position: expect.any(String),
            bio: expect.any(String),
            linkedin: expect.any(String),
            github: expect.any(String),
            avatar: expect.any(String)
          })
        );
      });
    });
  });
});
