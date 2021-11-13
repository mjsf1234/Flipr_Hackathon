import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        signIn: false,
        location: "",
        name: ""
    },
    reducers: {
        setSignInInfo(state, action) {
            const user_info = action.payload;
            state.signIn = true;
            state.location = user_info.location;
            state.name = user_info.name
        },
    }
})

export const userActions = userSlice.actions;

export default userSlice;