import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

export const fetchDeleteProduct = createAsyncThunk(
  "fetch/deleteProduct",
  APIProduct.deleteProduct
);

const initialState = {
  products: [],
  message: "",
  status: "idle",
  data: null,
};

const deleteProduct = createSlice({
  name: "deleteProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/deleteProduct/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase("fetch/deleteProduct/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;

      const { id } = payload;

      if (id) {
        state.products = state.products.filter((element) => element.id !== id);
      }

      console.log("delete action", payload);
    });

    builder.addCase("fetch/deleteProduct/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectDeleteProduct = (state) => state.deleteProduct;

export default deleteProduct.reducer;
