import React, { Fragment, useState } from 'react'
import CartItemsCard from './cartItemsCard'
import { useSelector } from 'react-redux'
import { getCartItem, totalPrice } from '../store/cartSlice'
import axios from "../../axios"
import "./cart.css"

const Cart = (props) => {   //  state.items = cartItem
    const [orderStatus, setOrderStatus] = useState([]);

    const cartItem = useSelector(getCartItem)
    const totPrice = useSelector(totalPrice)
    const buyItemsHandler = async (event) => {
        event.preventDefault();
        console.log("Cart Items are : ", cartItem);
        const res = axios.post('/placeOrder',
            {
                userName: localStorage.getItem('username'),
                rstName: props.restaurantName,
                items: cartItem[0].details,
                totalAmount: "",
                orderStatus: "Pending"
            });
    }
    return (
        <Fragment>
            <div className='cart-container'>
                {cartItem.map(cartItem => <CartItemsCard cartItem={cartItem} />)}
                <h3> Cart </h3>
                <div>
                    <p>Total Price</p>
                    <span> {totPrice}</span>
                </div>
                <button onClick={buyItemsHandler}> BUY </button>
            </div>

            <div>
                {orderStatus.length != 0 ?
                    <div className="orderStatus">

                    </div>
                    : null}
            </div>
        </Fragment>
    )
}

export default Cart
