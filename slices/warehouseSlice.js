import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouses: [],
};

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setWarehouses: (state, action) => {
      state.warehouses = action.payload;
    },
  },
});

// For components
export const { setWarehouses } = warehouseSlice.actions;

// For store
export default warehouseSlice.reducer;
