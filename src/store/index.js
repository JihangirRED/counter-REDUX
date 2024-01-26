import { configureStore } from "@reduxjs/toolkit";
import numReducer from "./todoSlice";
export default configureStore({
  reducer: {
    number1: numReducer,
  },
});
