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

  it('successfully registers an e-mail', async () => {
    const result = await request(app).post('/subscriptions').send({ email });
    const subscription = await NewsletterSubscriptionSchema.findOne({ email });

    expect(result.statusCode).toBe(201);
    expect(result.body).toHaveProperty('email', email);
    expect(subscription.email).toEqual(email);
  });

  it('returns e-mail when is already registered', async () => {
    await NewsletterSubscriptionSchema.create({ email });

    const result = await request(app).post('/subscriptions').send({ email });
    const subscriptions = await NewsletterSubscriptionSchema.find({ email });

    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty('email', email);
    expect(subscriptions).toHaveLength(1);
  });

  it('successfully deletes the e-mail from the subscriptions', async () => {
    await NewsletterSubscriptionSchema.create({ email });

    const result = await request(app).delete('/subscriptions').send({ email });
    const subscriptions = await NewsletterSubscriptionSchema.find({ email });

    expect(result.statusCode).toBe(204);
    expect(subscriptions).toHaveLength(0);
  });
});
