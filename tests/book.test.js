const request = require('supertest');
const app = require('../app');

describe('Books API', () => {
  it('should get all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
