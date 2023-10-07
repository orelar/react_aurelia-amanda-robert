import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

export const fetchCreateProduct = createAsyncThunk(
	"fetch/createProduct",
	APIProduct.createProduct
);
 
const initialState = {
	message: "",
	status: "idle",
	data: null,
};

const createProduct = createSlice({
	name: "createProduct",
	initialState,
	extraReducers: (builder) => {
		builder.addCase("fetch/createProduct/pending", (state) => {
			state.status = "loading";
			state.message = "";
		});

		builder.addCase("fetch/createProduct/fulfilled", (state, { payload }) => {
			state.status = "success";
			state.data = payload;
		});

		builder.addCase("fetch/createProduct/rejected", (state, { error }) => {
			state.status = "failed";
			state.message = error.stack;
		});
	},
});

export const selectCreateProduct = (state) => state.createProduct;

export default createProduct.reducer;