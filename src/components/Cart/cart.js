import React from 'react'
import CartItemsCard from './cartItemsCard'
import { useSelector } from 'react-redux'
import { getCartItem, totalPrice } from '../Store/cartSlice'




const Cart = () => {   //  state.items = cartItem
    const cartItem = useSelector(getCartItem)
    const tp = useSelector(totalPrice)
    return (
        <div className ='cart-container'>
         {cartItem.map(cartItem => <CartItemsCard cartItem ={cartItem}/>)  }
         <h3> this is cart </h3>
           <div> 
               <p>Total </p>
               <span> {tp }</span>
           </div>
        </div>
    )
}

export default Cart
