import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        signIn: false,
        location: [],
        name: "",
        items: [], //items = [{restuarant: ,items: []}]
        totalAmount: 0
    },
    reducers: {
        setSignInInfo(state, action) {
            const user_info = action.payload; // {signIn: true, location: [23,25]}
            console.log("User Info In Redux Local Store is : ", user_info);
            state.signIn = user_info.signIn;
            state.location = user_info.location;
            state.name = user_info.name
        },
    }
})

export const userActions = userSlice.actions;

export default userSlice;