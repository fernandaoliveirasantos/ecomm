
import { Product } from '../../api/models/product.js'

export async function saveProduct(product) {
    const createdProduct = await Product.create(product)
    await createdProduct.save()
    return createdProduct;
}

export async function findProducts() {
    return [];
}
