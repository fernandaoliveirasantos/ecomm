import { Router } from 'express';
import { decriptToken } from './helpers/token.js';

import { createProductUseCase } from './use-case/createProductUseCase.js';
import { listProductsUseCase } from './use-case/listProductsUseCase.js';

const router = Router();

router.post('/products', async (request, response) => {
    const authorizationHeader = request.headers.authorization;
    if(!authorizationHeader) {
        return response.status(401).json({ message: 'autentificação requerida' })
    }
    
    const token = authorizationHeader.split(' ')[1];
    
    if(!token) {
        return response.status(400).json({ message: 'cabeçalho de autorização mal-formado'});
    }
    
    const tokenDecripted = decriptToken(token);
    const userId = tokenDecripted.userId;

    if(!userId) {
        return response.status(403).json({ message: 'proibido' });
    }

    const product = request.body;
    const createdProduct = await createProductUseCase(product, userId);

    return response.status(201).json(createdProduct);
});

router.get('/products', async (request, response) => {
    const products = await listProductsUseCase();

    return response.json(products);
});

export { router };