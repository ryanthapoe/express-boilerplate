import request from 'supertest';

import app from '../src/app';

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - V1',
      }, done);
  });
});

describe('GET /api/v1/dummy', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/dummy')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['hello', 'again', 'world'], done);
  });
});

describe('GET /api/v1/nono', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/nono')
      .set('Accept', 'application/json')
      .expect(404, done);
  });
});