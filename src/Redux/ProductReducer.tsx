import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/ProductInterfaces";

import { RootState } from "./Store";
interface ProductsState {
  product: Product;
  loading: boolean;
  error: "" | null;
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  product: {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "...",
    images: ["...", "...", "..."],
  },
};

export const fetchListProduct = createAsyncThunk(
  "productList/fetch",
  async (productId: number) => {
    try {
      let fetchData: Response;

      fetchData = await fetch(`https://dummyjson.com/products/${productId}`);

      const data: Product = await fetchData.json();

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
      .addCase(fetchListProduct.pending, (state: ProductsState) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(
        fetchListProduct.fulfilled,
        (state: ProductsState, action: PayloadAction<Product>) => {
          state.loading = true;
          state.product = action.payload;
        }
      )
      .addCase(fetchListProduct.rejected, (state: ProductsState, action) => {
        state.loading = false;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
export const productObject = (state: RootState) => {
  return state.product.product;
};
