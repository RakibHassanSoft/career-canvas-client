import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";
import "./index.css";
import AuthProvider from "./Components/Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FormProvider } from "./Components/Providers/FormContext";


// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <FormProvider>
          <RouterProvider router={router} />
        </FormProvider>
      </QueryClientProvider>
    </StrictMode>
    <ToastContainer></ToastContainer>
  </AuthProvider>
);
