import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";
import "./index.css";
import AuthProvider from "./Components/Providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
);
