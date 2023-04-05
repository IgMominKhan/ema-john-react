import { BsTrash } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <h5>Order Summary</h5>
      <p>Selected Items: 6</p>
      <p>Total Price: $1140</p>
      <p>Total Shipping Charge: $5</p>
      <p>Tax: $114</p>

      <h6>Grand Total: $</h6>

      <button className="btn" style={{ backgroundColor: "#FF3030" }}>
        Clear Cart <BsTrash style={{ fontSize: "1.25rem" }} />
      </button>
      <button
        className="btn"
        style={{ backgroundColor: "#FF9900", marginBlock: ".75rem" }}
      >
        Review Order <HiArrowRight style={{ fontSize: "1.5rem" }} />
      </button>
    </div>
  );
};

export default Cart;
