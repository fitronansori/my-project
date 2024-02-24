import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  Login,
  SignUp,
  Services,
  Contact,
  Doctors,
  DoctorDetails,
} from "../pages";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import { DoctorDashboard, UserDashboard } from "../dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteDasboard from "./ProtectedRouteDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
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
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "user/profile/me",
        element: (
          <ProtectedRouteDasboard allowedRoles={["patient", "admin"]}>
            <UserDashboard />
          </ProtectedRouteDasboard>
        ),
      },
      {
        path: "doctor/profile/me",
        element: (
          <ProtectedRouteDasboard allowedRoles={["doctor", "admin"]}>
            <DoctorDashboard />
          </ProtectedRouteDasboard>
        ),
      },
    ],
  },
]);
