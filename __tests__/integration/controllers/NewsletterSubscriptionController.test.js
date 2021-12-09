const request = require('supertest');
const app = require('../../../src/app');

const { closeConnection } = require('../../helpers/database');
const NewsletterSubscriptionSchema = require('../../../src/models/NewsletterSubscription');

describe('Testing NewsletterSubscriptionController', () => {
  afterAll(async () => {
    await closeConnection();
  });

  afterEach(async () => {
    await NewsletterSubscriptionSchema.deleteMany();
  });

  const email = 'test@devchallenge.com.br';

  describe('POST: /subscriptions', () => {
    it('returns the successfully subscribed e-mail', async () => {
      const result = await request(app).post('/subscriptions').send({ email });
      const subscription = await NewsletterSubscriptionSchema.findOne({
        email
      });

      expect(result.statusCode).toBe(201);
      expect(result.body).toHaveProperty('email', email);
      expect(subscription.email).toEqual(email);
    });

    it('returns e-mail when is already subscribed', async () => {
      await NewsletterSubscriptionSchema.create({ email });

      const result = await request(app).post('/subscriptions').send({ email });
      const subscriptions = await NewsletterSubscriptionSchema.find({ email });

      expect(result.statusCode).toBe(200);
      expect(result.body).toHaveProperty('email', email);
      expect(subscriptions).toHaveLength(1);
    });

    it('returns an error when body is not present', async () => {
      const result = await request(app).post('/subscriptions');

      const expected = { email: 'This field is required.' };

      expect(result.statusCode).toBe(400);
      expect(result.body.errors).toEqual(expected);
    });

    it('returns an error when e-mail is empty', async () => {
      const result = await request(app)
        .post('/subscriptions')
        .send({ email: ' ' });

      const expected = { email: 'This field is required.' };

      expect(result.statusCode).toBe(400);
      expect(result.body.errors).toEqual(expected);
    });
  });

  describe('DELETE: /subscriptions', () => {
    it('successfully deletes the e-mail from the subscriptions', async () => {
      await NewsletterSubscriptionSchema.create({ email });

      const result = await request(app)
        .delete('/subscriptions')
        .send({ email });
      const subscriptions = await NewsletterSubscriptionSchema.find({ email });

      expect(result.statusCode).toBe(204);
      expect(subscriptions).toHaveLength(0);
    });

    it('returns nothing when the e-mail is not registered', async () => {
      const result = await request(app)
        .delete('/subscriptions')
        .send({ email });
      const subscriptions = await NewsletterSubscriptionSchema.find({ email });

      expect(result.statusCode).toBe(204);
      expect(subscriptions).toHaveLength(0);
    });
  });
});
