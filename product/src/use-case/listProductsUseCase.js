import { findProducts } from "../repositories/productRepository.js";

export async function listProductsUseCase() {
    const product = await findProducts();
    console.log(product)
    return product;
}
