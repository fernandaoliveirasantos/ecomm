import request from 'supertest';
import {app} from  '../../src/app.js';
import { productExample } from '../data/products.js';

describe('Lista o produto', () => {
    it('Retorna lista vazia de produtos', async () => {
        await request(app)
            .get('/products')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual([]);
            });
    });

    it('Retorna lista de produtos', async () => {
        await request(app)
            .get('/products')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual([]);
            });
    });
});