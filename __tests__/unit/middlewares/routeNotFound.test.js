const request = require('supertest');
const app = require('../../../src/app');

const { closeConnection } = require('../../helpers/database');

afterAll(async done => {
  await closeConnection();

  done();
});

describe('Testing route not found middleware', () => {
  it('should return HTTP status 404 when route does not exists', async done => {
    const result = await request(app).get('/learton');

    expect(result).toHaveProperty('status');
    expect(result.status).toBe(404);
    expect(result.body.message).toBe('Not found.');

    done();
  });

  it('should return HTTP status 404 when method is incorred', async done => {
    const result = await request(app).put('/newsletter');

    expect(result).toHaveProperty('status');
    expect(result.status).toBe(404);
    expect(result.body.message).toBe('Not found.');

    done();
  });
});
