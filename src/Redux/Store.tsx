import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsReducer";
import CategoriesReducer from "./CategoriesReducer";
import SearchProductReducer from "./SearchProductReducer";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: CategoriesReducer,
    searchProduct: SearchProductReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
