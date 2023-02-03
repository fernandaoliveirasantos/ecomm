import request from 'supertest';

import { app } from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';
import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

describe('Criação de conta', () => {
    afterAll(async () => {
        await client.close();

    });
    beforeEach(async () => {
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        
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

    it('não deve criar um usuário se o e-mail já estiver em uso', async () => {
        await createUserUseCase('Mariana', 'mariana@email.com', 'nova@senha123');
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Mariana',
                email: 'mariana@email.com',
                password: 'nova@senha123'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                    message: 'Usuário já cadastrado'
                })
            });
    });
});
