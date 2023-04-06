import './productReview.css'
import {FaRegTrashAlt} from 'react-icons/fa'


const ProductReview = ({product,handleRemoveItem})=>{
const {id,img,name,quantity,price} = product;
 return (
    <div className='review__product'>
        <img src={img} alt="" />
        <div className='info'>
            <h6 className='product-name'>{name}</h6 >
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
        </div>
        <div className="delete" onClick={()=>handleRemoveItem(id)}>
            <FaRegTrashAlt/>
        </div>
    </div>
)
}


export default ProductReview