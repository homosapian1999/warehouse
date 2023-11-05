import { configureStore } from "@reduxjs/toolkit";
import warehouseSlice from "../slices/warehouseSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistReducers = persistReducer(persistConfig, warehouseSlice);

const store = configureStore({
  reducer: persistReducers,
});

export default store;

export const persisitor = persistStore(store);
