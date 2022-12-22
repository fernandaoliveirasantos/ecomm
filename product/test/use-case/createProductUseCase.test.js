
import { createProductUseCase } from '../../src/use-case/createProductUseCase.js';

import { productExample } from '../data/products.js';


const creatProduct = await createProductUseCase(productExample);

console.log(creatProduct);