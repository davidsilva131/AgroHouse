import { configureStore } from "@reduxjs/toolkit";
import { allProductsReducer } from "../reducers/allProductsReducer";
import { productReducer } from "../reducers/productReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
  user: userReducer,
  product: productReducer,
  allProducts: allProductsReducer,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;