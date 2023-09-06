import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice"
import moviesreducer from "./moviesSlice"

const userstore=configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer
    }
})
export default userstore