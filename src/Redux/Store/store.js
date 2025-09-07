import { configureStore } from "@reduxjs/toolkit";
import productReducer from './../Slice/Productslice.js';
import cartReducer from './../Slice/cartSlice.js';
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
