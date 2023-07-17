import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  brand: string;
  category: string;
  discountPersantege: number;
  description: string;
  id: number;
  images: string[];
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  title: string;
}
export type TypeFetchResult = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};
interface ISingleCategoryState {
  products: TypeFetchResult;
  loading: boolean;
  error: null | string;
}
type TypeCategory = undefined | string;
export const fetchProductByCategory = createAsyncThunk<
  TypeFetchResult,
  TypeCategory
>("category/fetch", async (TypeCategory) => {
  console.log(TypeCategory, "kraken");
  let response: Response = await fetch(
    `https://dummyjson.com/products/category/${TypeCategory}`
  );
  const data: TypeFetchResult = await response.json();
  return data;
});

const initialState: ISingleCategoryState = {
  products: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },

  loading: false,
  error: null,
};
let searchResultslice = createSlice({
  name: "fetchPoductByCategory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductByCategory.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase(fetchProductByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products.";
      });
  },
});
export default searchResultslice.reducer;
