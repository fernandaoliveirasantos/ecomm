import request from 'supertest';

import { app } from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';

describe('Criação de conta', () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('Cadastrar um usuário se os dados estiverem corretos', async () => {
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Nicolas',
                email: 'nicolas@email.com',
                password: 'senhamudar@'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'Nicolas',
                    email: 'nicolas@email.com',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });
});
