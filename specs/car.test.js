const app = require('../app');
const request = require('supertest');
const carModel = require('../app/models').Car

let token = '';

beforeAll(async () => {
    const credentialsLogin = {
        email: 'johnny@binar.co.id',
        password: '123456'
    }

    const response = await request(app).post('/v1/auth/login').send(credentialsLogin);

    token = response.body.accessToken;
    console.log(token)
});

describe('GET /', () => {
    it('return 200 ok', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
    });
});

describe('GET /v1/cars', () => {
    it('return 200 ok', async () => {
        await request(app)
            .get('/v1/cars')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
    });
});

describe('POST /v1/cars', () => {
    it('return 201 created', async () => {
        const payload = {
            name: "Pajero Test",
            price: 200000,
            size: "medium",
            image: "www.google.com"
        };

        await request(app)
            .post('/v1/cars')
            .set({
                Authorization: `Bearer ${token}`
            })
            .send(payload)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201)
    });
});

describe('PUT /v1/cars/[id]', () => {
    it('return 200 ok correct id', async () => {
        const payload = {
            name: "Pajero",
            price: 200000,
            size: "medium",
            image: "www.google.com"
        };

        const car = await carModel.create(payload);

        const payloadNew = {
            name: "Pajero Keren",
            price: 230000,
            size: "Large",
            image: "www.google.com",
        };

        await request(app)
            .put(`/v1/cars/${car.id}`)
            .set({
                Authorization: `Bearer ${token}`
            })
            .send(payloadNew)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
    })
})

describe('DELETE /v1/cars/[id]', () => {
    it('return 204 ok correct id', async () => {
        const payload = {
            name: "Pajero",
            price: 200000,
            size: "medium",
            image: "www.google.com"
        };

        const car = await carModel.create(payload);

        await request(app)
            .del(`/v1/cars/${car.id}`)
            .set({
                Authorization: `Bearer ${token}`
            })
            .expect(204)
    })
})