import { findProducts } from "../../src/repositories/productRepository.js";

export async function cleanProductTable () {
    const products = await findProducts();
    for await (const product of products) {
        const productFeaturesDeletion = product.features.map(feature => feature.destroy())
        const productImagesDeletion = product.images.map(image => image.destroy());

        await Promise.all([...productFeaturesDeletion, productImagesDeletion]);
        await product.destroy();
    }
}

