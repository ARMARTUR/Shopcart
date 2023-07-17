import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  title: string;
}
export type FetchResult = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

interface ProductsState {
  products: FetchResult;
  loading: boolean;
  error: string | null;
}

export const fetchListProducts = createAsyncThunk<FetchResult>(
  "productsList/fetch",
  async () => {
    let fetchData: Response;

    fetchData = await fetch(`https://dummyjson.com/products`);

    if (!fetchData.ok) {
      throw new Error("Failed to fetch products.");
    }

    const data: FetchResult = await fetchData.json();

    return data;
  }
);

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

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products.";
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
