import { useEffect, useState } from "react";

import Product from "../Product/Product.jsx";
import Cart from "../Cart/Cart.jsx";

import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import { addToDb, getShoppingCart } from '../../../utilities/utilities.js'

const Shop = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  // load data from api
  // useEffect(() => {
  //   const url = `fakedb/products.json`;
  //   fetch(url)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw res;
  //       }
  //     })
  //     .then((fetchData) => setProducts(fetchData))
  //     .catch((err) => {
  //       console.error("Error fetching data : ", err);
  //       setError(err);
  //     })
  //     .finally(() => setProducts((prevState) => prevState));
  // }, []);

  // use loader to load data
  const products = useLoaderData();


  const x = () => {

    const cartData = getShoppingCart();
    const productCart = [];

    for (const id in cartData) {
      const foundProduct = products.find((pd) => id === pd.id);
      if (foundProduct) {
        foundProduct.quantity = cartData[id]
      }
      else {
        foundProduct.quantity = 1;
      }

      productCart.push(foundProduct)

      setSavedProducts(productCart)
    }
  }


  useEffect(x, [])



  // add to cart
  const handleAddToCart = (id) => {
    addToDb(id);
    x();
  }



  return (
    <main className="shop">
      <section className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </section>

      <section className="order-summery">
        <Cart products={savedProducts} />
      </section>
    </main>
  );
};

export default Shop;
