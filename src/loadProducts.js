
const loadProducts = async () => {
    const url = `./fakedb/products.json`;
    const res = await fetch(url)
    const products = await res.json();
    return products
}

export default loadProducts;