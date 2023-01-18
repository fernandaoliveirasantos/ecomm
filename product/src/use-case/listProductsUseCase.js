import { findProducts } from "../repositories/productRepository.js";

export async function listProductsUseCase() {
    const product = await findProducts();
    return product;
}
