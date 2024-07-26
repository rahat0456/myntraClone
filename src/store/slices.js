import { createSlice } from "@reduxjs/toolkit";

const Slicy = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return action.payload;
    },
  },
});
export const SliceFunctions = Slicy.actions;
export default Slicy;
