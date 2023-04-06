import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getShoppingCart, removeFromDb, deleteShoppingCart } from "../../../utilities/utilities";
import ProductReview from '../ProductReview/ProductReview'
import Cart from "../Cart/Cart";
import { BsTrash } from "react-icons/bs";
import './Review.css';

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


    // clear cart 
    const handleClearCart = () => {
        setProductCart([]);
        deleteShoppingCart()
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
                <Cart products={productCart} handleClearCart={handleClearCart} >
                    <button className="btn" style={{ backgroundColor: '#FF9900', marginBlock: ".75rem" }}>
                        <Link to='/process-order'>Proceed Order <BsTrash /></Link>
                    </button>
                </Cart>
            </div>
        </div>
    )
}

export default Review;