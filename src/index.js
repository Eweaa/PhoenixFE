import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Layout from "./Layouts/PatientLayout/Layout";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import Error from "./Pages/Error/Error";
import Doctors from "./Pages/Doctors/Doctors";
import Settings from "./Pages/Settings/Settings";
import Watch from "./Pages/Watch/Watch";
import Motivation from "./Pages/Motivation/Motivation";
import BurnDegree from "./Pages/BurnDegree/BurnDegree";
import Doctor from "./Pages/Doctor/Doctor";
import DoctorLayout from "./Layouts/DoctorLayout/DoctorLayout";
import Requests from "./Pages/DoctorPages/Requests/Requests";
import Results from "./Pages/DoctorPages/Results/Results";
import Patient from "./Pages/DoctorPages/Patient/Patient";
import Profile from "./Pages/Profile/Profile";

const doctor = false;

// #region doctor layout router
const DoctorRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DoctorLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/results/:patientId",
        element: <Patient />,
      },
      {
        path: "/:userId",
        element: <Profile />
      }
    ],
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
// #endregion

// #region patient layout router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/:doctorId",
        element: <Doctor />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/motivation",
        element: <Motivation />,
      },
      {
        path: "/burn-degree",
        element: <BurnDegree />,
      },
      {
        path: "/:userId",
        element: <Profile />
      }
    ],
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
// #endregion

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={doctor ? DoctorRouter : router} />
  </AuthProvider>
);