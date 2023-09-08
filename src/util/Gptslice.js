import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
    ShowgptSearch:false,
    movieNames:null,
    movieResults:null,
    },
    reducers:{
        togglegptsearch:(state)=>{
            state.ShowgptSearch= !state.ShowgptSearch;
        },
        addGptMovieResult:(state,actions)=>{
            state.movieNames = actions.payload.movieNames;
            state.movieResults = actions.payload.movieResults;
        },
    }
})

export const{togglegptsearch,addGptMovieResult}= GptSlice.actions
export default GptSlice.reducer