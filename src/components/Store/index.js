import { configureStore} from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import uiSlice from "./ui";

const Store = configureStore({
    reducer:{ cart: CartSlice.reducer, ui: uiSlice.reducer}, 
        
})

export default Store;   