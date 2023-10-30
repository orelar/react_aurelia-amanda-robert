import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlices";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;