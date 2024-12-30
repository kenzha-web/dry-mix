import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import orebiReducer from "./orebiSlice";
import categoriesSlice from "./features/categories/categoriesSlice";
import productsSlice from "./features/products/productsSlice";
import {apiSlice} from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import postsSlice from "./features/posts/postsSlice";
import commentsSlice from "./features/comments/commentsSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, orebiReducer);

export const store = configureStore({
  reducer: {
    orebiReducer: persistedReducer,
    auth: authSlice,
    categories: categoriesSlice,
    products: productsSlice,
    posts: postsSlice,
    comments: commentsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export let persistor = persistStore(store);
