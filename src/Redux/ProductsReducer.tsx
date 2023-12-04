import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { FetchResult } from "../Interfaces/ProductInterfaces";
interface ProductsState {
  products: FetchResult;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
};

export const fetchListProducts = createAsyncThunk(
  "productsList/fetch",
  async () => {
    try {
      let fetchData: Response;

      fetchData = await fetch(`https://dummyjson.com/products`);

      const data: FetchResult = await fetchData.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state: ProductsState) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(
        fetchListProducts.fulfilled,
        (state, action: PayloadAction<FetchResult>) => {
          state.loading = true;
          state.products = action.payload;
        }
      )
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products.";
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
