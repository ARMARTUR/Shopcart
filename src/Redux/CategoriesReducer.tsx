import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  categories: string[];
  loading: boolean;
  error: null | string;
}

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    let response: Response = await fetch(
      "https://dummyjson.com/products/categories"
    );

    const data: string[] = await response.json();

    return data;
  }
);

const initialState: ProductsState = {
  categories: [],

  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products.";
      });
  },
});

export default productSlice.reducer;
