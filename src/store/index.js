import { configureStore, createSlice } from "@reduxjs/toolkit";
import quotesReducer from "./quotes_slice";

const store = configureStore({
  reducer: { quotes: quotesReducer },
});

export default store