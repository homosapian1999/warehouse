import { configureStore } from "@reduxjs/toolkit";
import warehouseSlice from "../slices/warehouseSlice";

const store = configureStore({
  reducer: warehouseSlice,
});

export default store;
