import { configureStore } from "@reduxjs/toolkit";

// slice
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
