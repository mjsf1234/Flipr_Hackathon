import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name: 'hello',
    initialState :[] ,

    reducer:{
         Ui (state, action){
            
            const newUi = action.payload; 
            state.initialState.push( action.payload);
        }


    }
})

export const uiAction = uiSlice.actions

export default uiSlice