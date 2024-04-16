import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  latestProducts: [],
  isLoading: true,
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios("https://fakestoreapi.com/products");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);
const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.latestProducts = action.payload.slice(-4);
      });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export default ProductsSlice.reducer;
