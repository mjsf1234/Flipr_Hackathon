import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import restSlice from "./restSlice";
import userSlice from "./userSlice";

const Store = configureStore({
    reducer: { cart: CartSlice.reducer, rest: restSlice.reducer, user: userSlice.reducer },

})

export default Store;