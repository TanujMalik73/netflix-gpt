import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice"
import moviesreducer from "./moviesSlice"
import gptreducer from "./Gptslice"
import confiqreducer from "./confiqSlice"
const userstore=configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,
        gpt:gptreducer,
        confiq:confiqreducer,
    }
})
export default userstore