const products = []

export async function saveProduct(product) {
    products.push(product)
    return products

}

export async function findProducts() {
    const products = products
    return products

}
