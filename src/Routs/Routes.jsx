import React from "react";

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyBookings from "../Components/MyBookings";
import DoctorDetails from "../Components/DoctorDetails";
import Blogs from "../Components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <span className="loading h-screen flex mx-auto items-center justify-center loading-dots loading-sm"></span>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/doctor-details/:id",
        Component: DoctorDetails,
        loader: ()=> fetch('../DoctorData.json'),
      },
      {
        path: "/blogs",
        Component: Blogs
      },
    ],
  },
]);

export default router;
