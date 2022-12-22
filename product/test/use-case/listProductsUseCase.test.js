import { createProductUseCase } from '../../src/use-case/createProductUseCase.js';
import { listProductsUseCase } from '../../src/use-case/listProductsUseCase.js';
import { productExample } from '../data/products.js';


/** Imprime products antes de cadastrar quaquer produto */
const emptyProductList = await listProductsUseCase();
console.log("emptyProductList", emptyProductList);

/**imprime product depois de cadastrar algum produto */
await createProductUseCase(productExample);
const productslist = await listProductsUseCase();
console.log("productList", JSON.stringify(productslist, undefined, 2));

/**
 * Imprime como objeto <console.log("productList", productslist);> 
 * imprime como string incluindo <console.log("productList", JSON.stringify(productslist))>;
 * Para formatas a lista <console.log("productList", JSON.stringify(productslist, undefined, 2))>
 */