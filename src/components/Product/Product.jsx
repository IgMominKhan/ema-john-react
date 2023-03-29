import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Product.css";

const Product = ({ product }) => {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className="product">
      <div className="product__img">
        <img src={img} />
      </div>
      <div className="product__details">
        <h6 className="product__name">{name}</h6>
        <p className="product__price">Price: ${price}</p>
        <p className="product__manufacturar caption">Manufacturer: {seller} </p>
        <p className="product__ratings\ caption">Rating: {ratings} star </p>
      </div>
      <button className="add-to-cart">
        Add to Cart <AiOutlineShoppingCart />
      </button>
    </div>
  );
};

export default Product;
