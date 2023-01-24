import request from 'supertest';
import { Product } from '../../models/product.js';
import {app} from  '../../src/app.js';
import { findProducts } from '../../src/repositories/productRepository.js';
import { productExample } from '../data/products.js';
import { cleanProductTable } from '../helpers/product.js';

describe('Cria Produto', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

    it('Cadastrar um produto se os dados estiverem corretos', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
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
});
