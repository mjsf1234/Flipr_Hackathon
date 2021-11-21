import "./quantityButton.css"
import { useState } from "react"
const QuantityButton = (props) =>{

    const [ quantity, setQuantity ] =useState(0);
    const addQuantity = () =>{
        const newQuantity = quantity+1;
        setQuantity(newQuantity);
    }

    const substractQuantity = () =>{
        if (quantity<=0) return;
        const newQuantity = quantity-1;
        setQuantity(newQuantity);
    }
    return(

         <div className='quantity-button'>
             <button onClick ={ addQuantity}>+</button>
             <span> {quantity}</span>
             <button onClick={substractQuantity}> -</button>
         </div>
    ) 
}

export default QuantityButton;