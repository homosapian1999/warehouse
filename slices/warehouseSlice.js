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
    updateWarehouse: (state, action) => {
      const updatedFields = action.payload;
      console.log(updatedFields);

      const index = state.warehouses.findIndex(
        (warehouse) => warehouse.id === updatedFields.id
      );
      // let index = 2;
      if (index !== -1) {
        state.warehouses[index] = {
          ...state.warehouses[index],
          ...updatedFields,
        };
      }
    },
  },
});

// For components
export const { setWarehouses, updateWarehouse } = warehouseSlice.actions;

// For store
export default warehouseSlice.reducer;
