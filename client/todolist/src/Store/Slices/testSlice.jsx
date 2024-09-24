import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  //Name of the slice according to your wish
  name: "test",
  //Initial value of this state
  initialState: [],
  //  Big reducers conations many small reducers
  reducers: {
    addUser(state, action) {
        // console.log(action.payload)
        state.push(action.payload)
    },
  },
});


export default testSlice.reducer ;
export const{ addUser }=testSlice.actions
