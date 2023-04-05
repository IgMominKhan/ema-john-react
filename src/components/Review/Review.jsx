import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../../utilities/utilities";
import Cart from "../Cart/Cart";
import './Review.css';

const Review =()=> {


    const products = useLoaderData();
    const cartData = getShoppingCart();

    const productCart = [];

    for(const id in cartData) {
       const addedProduct =  products.find(product => product.id === id);
       productCart.push(addedProduct)
    }


    
        
    return (
        <div className="order-review-container">
            <div className="order-list">
                {productCart.map(product => <h1>product Name : {product.name}</h1> )}
            </div>

            <div className="order-summery">
                <Cart/>
            </div>
        </div>
    )
}

export default Review;