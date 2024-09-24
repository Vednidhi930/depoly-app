import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"Counter",
    initialState:0,
    reducers:{
        increaseCounter:(state)=>state+1,
        decreaseCounter:(state)=>state<=0 ? 0 :state-1
    }
})

 export default counterSlice.reducer

 export const { increaseCounter,decreaseCounter }=counterSlice.actions