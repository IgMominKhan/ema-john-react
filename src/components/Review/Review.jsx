import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../../utilities/utilities";
import ProductReview from '../ProductReview/ProductReview'
import Cart from "../Cart/Cart";

import './Review.css';
import { useState } from "react";
import { useEffect } from "react";
import { removeFromDb } from "../../../utilities/utilities";

const Review = () => {

    const [productCart, setProductCart] = useState([])


    const products = useLoaderData();
    const cartData = getShoppingCart();

    // remove item
    
    const handleRemoveItem = (id) => {
        console.log(id)
        setProductCart((prevState) => prevState.filter((item) => item.id !== id))
        removeFromDb(id)
    }



    useEffect(() => {

        const tempProductCart = [];

        for (const id in cartData) {
            const foundProduct = products.find(product => product.id === id);
            if (foundProduct) {
                foundProduct.quantity = cartData[id];
            }
            tempProductCart.push(foundProduct)
        }

        setProductCart(tempProductCart)

    }, [])





    return (
        <div className="order-review-container">
            <div className="order-list">
                {productCart.map(product => <ProductReview key={product.id} product={product} handleRemoveItem={handleRemoveItem} />)}
            </div>

            <div className="order-summery">
                <Cart products={productCart} />
            </div>
        </div>
    )
}

export default Review;