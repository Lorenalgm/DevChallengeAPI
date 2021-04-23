const mongoose = require('mongoose');

const ChallengeRepository = require('../ChallengeRepository');

beforeAll(async () => {
  const url = process.env.MONGO_URL;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Testing ChallengeRepository', () => {
  describe('.created', () => {
    describe('when a invalid challenge object is passed', () => {
      it('throws an ValidationError', async () => {
        try {
          await new ChallengeRepository().create();
        } catch (e) {
          expect(e instanceof mongoose.Error.ValidationError).toBeTruthy();
        }
      });
    });
  });

  describe('.fetchAll', () => {});

  describe('.fetchById', () => {});
});
