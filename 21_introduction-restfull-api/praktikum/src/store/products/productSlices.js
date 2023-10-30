import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
