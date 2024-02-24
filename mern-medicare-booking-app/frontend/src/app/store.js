import { configureStore } from "@reduxjs/toolkit";

// slice
import authReducer from "./features/authSlice";

// service
import { usersApi } from "./services/usersApi.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
