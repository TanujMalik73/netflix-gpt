import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        Trailervideo:null,
        nowPlayingMovies:null,
        TopRated:null,
        Popular:null,
        Upcoming:null
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailervideo:(state,action)=>{
            state.Trailervideo=action.payload;
        },
        addTopRated:(state,action)=>{
            state.TopRated=action.payload;
        },
        addPopular:(state,action)=>{
            state.Popular=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.Upcoming=action.payload;
        },
    }
})

export const{addnowPlayingMovies,addTrailervideo,addTopRated,addPopular,addUpcoming}=moviesSlice.actions
export default moviesSlice.reducer