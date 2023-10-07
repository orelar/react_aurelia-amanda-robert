import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../store/postsProduct";
import productReducer from "../store/postProduct";
import createProductReducer from "../store/createProduct";
import deleteProductReducer from "../store/deleteProduct";
import updateProductReducer from "../store/updateProduct";
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    createProduct: createProductReducer,
    deleteProduct: deleteProductReducer,
    updateProduct: updateProductReducer,
  },
});

export default store;