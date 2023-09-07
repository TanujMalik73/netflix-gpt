import { createSlice } from "@reduxjs/toolkit";

const confiqSlice = createSlice({
    name:"confiq",
    initialState:{
        langtype:"en",
    },
    reducers:{
        changelang:(state,action)=>{
            state.langtype=action.payload
        }
    }

})

export const{changelang} = confiqSlice.actions
export default confiqSlice.reducer