import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  all: [],
  isLoading: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios("https://fakestoreapi.com/products");
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      return await resp.data;
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
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.all = action.payload;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
