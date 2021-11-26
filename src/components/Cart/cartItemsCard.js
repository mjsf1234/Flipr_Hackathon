import { AiFillDelete } from "react-icons/ai";
import './cartItemCard.css'
import QuantityButton from "./quantityButton";

const CartItemsCard = (props) => {


    return (
        // props.cartItem = {rstName: "Vandhan", details : [{itemName:'chicken', quantity: '1 ', price = "25 " }]} 
        <div className='cart-items-container'>
            <div>
                <p> Restaurant Name: {props.cartItem.rstName}</p>

                {props.cartItem.details.map(itm => <div><p>itemName = {itm.itemName}</p>
                    <p>item quantity={itm.quantity}</p>
                </div>)}



            </div>
            <div className='quantity-button-container'>
                <QuantityButton quantity setQuantity />
            </div>
            <div className=' cart-item-remover'>
                <button> <AiFillDelete /></button>
            </div>
        </div>

    )


}
export default CartItemsCard;