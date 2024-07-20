import { configureStore } from "@reduxjs/toolkit";
import call from "./Query";


const store = configureStore({
  reducer: {
    [call.reducerPath]: call.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(call.middleware),
});

export default store;