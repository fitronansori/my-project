import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { router } from "./router/Router";

import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        position={"bottom-left"}
      />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
