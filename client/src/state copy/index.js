import { createSlice } from "@reduxjs/toolkit";

/*A function that accepts an initial state, an object of reducer functions, and a 
"slice name", and automatically generates action creators and action types that correspond to the reducers and state.*/

const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode: (state) => { //this function changes the global state
            state.mode = state.mode === 'light' ? "dark" : 'light';
        }
    }
})

export const {setMode} = globalSlice.actions; 
export default globalSlice.reducer;