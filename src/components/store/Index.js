import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";

const Store = configureStore({
    reducer: { cart: CartSlice.reducer },

})

export default Store;