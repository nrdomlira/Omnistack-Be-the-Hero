const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterAll(async () =>{
       await conn.destroy();
    })

    it('should to be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APD",
                email: "contato@apd.com.br",
                whatsapp: "8100000000",
                city: "Recife",
                uf: "PE"
            });
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});