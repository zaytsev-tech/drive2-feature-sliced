import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./persistReducer";

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
