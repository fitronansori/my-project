import {
  Home,
  Login,
  Signup,
  Services,
  Doctors,
  DoctorDetails,
  Contact,
} from "../pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
    children: [
      {
        path: "/:id",
        element: <DoctorDetails />,
      },
    ],
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
