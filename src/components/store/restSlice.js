import { createSlice } from "@reduxjs/toolkit";

const restSlice = createSlice({
    name: "rest",
    initialState: {
        name: "",
        signIn: false
    },
    reducers: {
        setSignInInfo(state, action) {
            const rest_info = action.payload;
            console.log("Rest Info In Redux Local Store is : ", rest_info);
            state.name = rest_info.name;
            state.signIn = true;
        }
    }
}
)

export const restActions = restSlice.actions;

export default restSlice;