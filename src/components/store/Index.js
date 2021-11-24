import { configureStore } from "@reduxjs/toolkit";
import restSlice from "./restSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: { user: userSlice.reducer, rest: restSlice.reducer }
})

export default store;