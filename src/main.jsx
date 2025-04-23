import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routs/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <span className="loading h-screen flex mx-auto items-center justify-center loading-dots loading-sm"></span>
      }
    >
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
