import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        Trailervideo:null,
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailervideo:(state,action)=>{
            state.Trailervideo=action.payload;
        },
    }
})

export const{addnowPlayingMovies,addTrailervideo}=moviesSlice.actions
export default moviesSlice.reducer