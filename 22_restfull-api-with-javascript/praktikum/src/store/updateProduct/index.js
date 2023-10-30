import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

export const fetchUpdateProduct = createAsyncThunk(
  "fetch/updateProduct",
  async (data) => {
    const result = await APIProduct.updateProduct(data.id,data);
    // Debugging
    // console.log('INI ID DARI FETCH',data.id)
    // console.log('INI DATA DARI FETCH',data);
    return result;
  }
   
);

const initialState = {
  products: [],
  message: "",
  status: "idle",
  data: null,
};

const updateProduct = createSlice({
  name: "updateProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUpdateProduct.pending, (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase(fetchUpdateProduct.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.data = payload;

      const updatedProducts = state.products.map((product) =>
        product.id === payload.id ? {...payload} : product
      );

      state.products = updatedProducts;
    });

    builder.addCase(fetchUpdateProduct.rejected, (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectUpdateProduct = (state) => state.updateProduct;

export default updateProduct.reducer;
