import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import cartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice, cartReducer
  }
});

export default Store;