import { Router } from 'express';
import { createProductUseCase } from './usecase/createProductUseCase.js';
import { listProducts } from './usecase/listProduct.js';
export const router = new Router();

router.get('/products', function(request,response) {
    listProducts ()
    .then(products => {
        response.status(201).json(products)
    })
    .catch(error => {
        response.status(400).json({ status: 'error', message: error.message });
    }); 
} );

router.post('/products', function(request, response) {
    const { produto} = request.body
    createProductUseCase(produto)
        .then(saveProduct => {
            response.status(201).json(saveProduct)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});