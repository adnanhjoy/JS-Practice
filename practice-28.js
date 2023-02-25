const products = [
    { name: 'Phone', price: 10000 },
    { name: 'Laptop', price: 10000 },
    { name: 'Laptop', price: 10000 },
    { name: 'Phone', price: 10000 },
    { name: 'Phone', price: 10000 },
    { name: 'Laptop', price: 10000 }
];

function matchProduct(event, search) {
    const searchProduct = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            searchProduct.push(product)
        }
    }
    return searchProduct;
}

const result = matchProduct(products, 'laptop');
console.log(result);