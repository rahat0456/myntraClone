import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices";
import fetchStatusSlice from "./fetchStatus";
import Baggy from "./bagFetch";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    baggyItems: Baggy.reducer,
  },
});

export default myntraStore;
