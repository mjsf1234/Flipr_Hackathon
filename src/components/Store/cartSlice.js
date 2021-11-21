import { createSlice } from "@reduxjs/toolkit";
import { BsChevronCompactLeft } from "react-icons/bs";


const CartSlice = createSlice({

    name:'cart',  
    initialState:{
        items:[], //    [  {rstName: "Vandhan", details : [{itemName:'', quantity: ' ', price = " " }]}   ]
        totalQuantity:0,
        totalPrice:0
    },
//[ {h1}   {h1}  {h3}   ]
    reducers: {
        addToCart (state, action){
            const newItem = action.payload; // newItem = {rstName, rstItem, price}  
            // alert("hello")                                                                      
            // console.log(newItem)                                                                        
            const existingRst = state.items.find( (rst) => rst.rstName === newItem.rstName)
            // totalQuantity++;
        //     state.items.push( 
        //         {rstName: action.payload.rstName,
        //             rstItem:action.payload.rstItem,
        //             price:action.payload.price
        //         }

        //    )
            if (!existingRst){
                // alert('restaurant not found')

                const newRstItems = {} 
                newRstItems["rstName"] = newItem.rstName;
                
                const details = [];
                const newDetails =  {itemName:newItem.rstItem, quantity:1, price:newItem.price }
                details.push(newDetails)
                newRstItems["details"] =  details

                state.items.push(newRstItems);
                state.totalQuantity++;
                state.totalPrice  = parseInt(newItem.price);
                
                
                    
                }
            else{
                // alert("restaurant found")
                
                const existingItem = existingRst.details.find( (itm) => itm.itemName ===newItem.rstItem )
                console.log('this is existingRst', existingItem)
                if (!existingItem){
                    // alert("item not found")

                    const newAddedItem = {itemName:newItem.rstItem, quantity:1, price:newItem.price } 
                    existingRst.details.push(newAddedItem);  //new object to store in detail
                    state.totalPrice+=parseInt(newItem.price) 
                    // alert("new item added")

                }
                else{
                    // alert("item found")
                    existingItem.quantity++;
                    // existingItem.price+=existingItem.price; 
                    state.totalPrice+=parseInt(existingItem.price);
                    // alert("price and quantity updated")
                }
                state.totalQuantity++;
            }

            console.log('this is updated cart',state.items)

            
        }

    }

})
export const getCartItem = state =>state.cart.items
export const totalPrice = state=>state.cart.totalPrice
export const cartAction = CartSlice.actions;
// console.log('this is getCartItem',getCartItem);
export default CartSlice;





