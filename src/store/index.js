import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import CartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
  },
});

export default store;
