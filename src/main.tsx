import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router, rootElement } from "./router.tsx";
import { RouterProvider } from "react-router";
import "./index.css";
import { AuthProvider } from "./pages/Connection/context/Auth.provider.tsx";
import { ModalProvider } from "./contexts/Modal/Modal.provider.tsx";

if (rootElement == null) {
  throw new Error(`La route utilisé n'est pas correcte`);
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </AuthProvider>
  </StrictMode>
);
