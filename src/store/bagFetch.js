import { createSlice } from "@reduxjs/toolkit";

const Baggy = createSlice({
  name: "baggyItems",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },

    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const BagFunctions = Baggy.actions;
export default Baggy;
