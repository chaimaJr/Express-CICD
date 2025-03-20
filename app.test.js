const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('responds with "Hello, CI/CD with Ansible and Kubernetes!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, CI/CD with Ansible and Kubernetes!');
    });
});

describe('GET /health', () => {
    it('responds with { status: "OK" }', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'OK' });
    });
});