import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";
import Layout from "./Layout";
import "./index.css";

// Lazy load components to reduce initial bundle size
const Login = lazy(() => import("./Component/Login"));
const Home = lazy(() => import("./Component/Home"));
const Wish = lazy(() => import("./Component/Wish"));
const Love = lazy(() => import("./Component/Love"));
const Contact = lazy(() => import("./Component/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      { path: "home", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
      { path: "wish", element: <Suspense fallback={<div>Loading...</div>}><Wish /></Suspense> },
      { path: "love", element: <Suspense fallback={<div>Loading...</div>}><Love /></Suspense> },
      { path: "contact", element: <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
