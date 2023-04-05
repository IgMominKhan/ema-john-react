import { BsTrash } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import "./Cart.css";


const Cart = ({ products }) => {


  let totalPrice = 0;
  let shippingCharge = 0;
  let qty = 0;
  for (const product of products) {
    const itemCost = product.price * product.quantity;
    totalPrice += itemCost;
    shippingCharge += product.shipping;
    qty += product.quantity
  }
  const tax = totalPrice * .1;
  const grandTotal = totalPrice + tax;



  return (
    <div>
      <h5>Order Summary</h5>
      <p>Selected Items: {qty}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping Charge: ${shippingCharge.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>

      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

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
