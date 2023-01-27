import request from 'supertest';
import { app } from '../../src/app.js';
import { productExample } from '../data/products.js';
import { cleanProductTable } from '../helpers/product.js';
import { generateToken } from '../helpers/token.js';

describe('Cria Produto', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

    it('Cadastrar um produto se os dados estiverem corretos', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${generateToken('id-do-usuario')}`)
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
                    user_id: 'id-do-usuario',
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: productExample.features.map(feature => ({
                        ...feature, 
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: productExample.images.map(image => ({
                        ...image, 
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))
                });
            });
    });

    it('não deve criar um produto quando nenhuma informação de autorização é fornecida', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'autentificação requerida' });
            });
    });

    it('não deve criar um produto quando as informações de autorização são mal-formadas', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', 'header-errado')
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'cabeçalho de autorização mal-formado'});
            });
    });

    it('não deve criar um produto quando as informações de autorização foram modificadas', async () => {
        const modifiedToken = generateToken('id-usuario') + 'a';
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${modifiedToken}`)
            .expect(403)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'proibido' });
            });
    });
});