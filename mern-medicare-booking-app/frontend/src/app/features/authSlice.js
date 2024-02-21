import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
};

// Load state from localStorage
const savedState = localStorage.getItem("authState");
const initialStateWithLocalStorage = savedState
  ? JSON.parse(savedState)
  : initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateWithLocalStorage,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;

      // Save state to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },

    logout: (state) => {
      state.user = null;
      state.role = null;

      // clear localStorage
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
