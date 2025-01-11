import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
