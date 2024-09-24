import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./Slices/testSlice";
import counterSlice from "./Slices/counterSlice";

const store = configureStore({
  reducer: {
    users: testSlice,
    counters: counterSlice,
  },
});

export default store;
