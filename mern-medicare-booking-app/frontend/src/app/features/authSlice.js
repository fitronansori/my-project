import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  role: null,
  isLoggedIn: false,
};

// Load state from localStorage
const savedState = localStorage.getItem("authState");
const initialStateWithLocalStorage = savedState
  ? JSON.parse(savedState)
  : initialState;

// Set data dalam localStorage dengan waktu kadaluarsa 30 hari
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 30);
localStorage.setItem("authState", JSON.stringify(initialStateWithLocalStorage));
localStorage.setItem("expirationDate", expirationDate.toISOString());

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateWithLocalStorage,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isLoggedIn = true;
      // Save state to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },

    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isLoggedIn = false;
      // clear localStorage
      localStorage.removeItem("authState");
      // clear cookies
      Cookies.remove("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
