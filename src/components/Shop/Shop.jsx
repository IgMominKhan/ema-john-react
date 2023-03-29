import { useEffect, useState } from "react";

import Product from "../Product/Product.jsx";
import Order from "../Order/Oder";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // load data from api
  useEffect(() => {
    const url = `fakedb/products.json`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((fetchData) => setProducts(fetchData))
      .catch((err) => {
        console.error("Error fetching data : ", err);
        setError(err);
      })
      .finally(() => setProducts((prevState) => prevState));
  }, []);

  return (
    <main className="shop">
      <section className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>

      <section className="order-summery">
        <Order />
      </section>
    </main>
  );
};

export default Shop;
