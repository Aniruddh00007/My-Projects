import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Login";
import Layout from "./Layout";
import Hero from "./Component/hero";
import Wish from "./Component/Wish";
import Love from "./Component/Love";
import Contact from "./Component/Contact";
import ProtectedRoute from "./Component/ProtectedRoute";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />, // login page without navbar
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "hero", element: <Hero /> },
      { path: "wish", element: <Wish /> },
      { path: "love", element: <Love /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
