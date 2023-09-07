import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
    ShowgptSearch:false,
    },
    reducers:{
        togglegptsearch:(state)=>{
            state.ShowgptSearch= !state.ShowgptSearch;
        },
    }
})

export const{togglegptsearch}= GptSlice.actions
export default GptSlice.reducer