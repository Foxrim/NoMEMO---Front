import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router, rootElement } from "./router.tsx";
import { RouterProvider } from "react-router";
import "./index.css";
import { AuthProvider } from "./pages/Connection/context/Auth.provider.tsx";
import { ModalProvider } from "./contexts/Modal/Modal.provider.tsx";
import { UserProvider } from "./contexts/User/User.provider.tsx";
import { CategoriesProvider } from "./contexts/Categories/Categories.provider.tsx";
import { NotesProvider } from "./contexts/Notes/Notes.provider.tsx";

if (rootElement == null) {
  throw new Error(`La route utilisé n'est pas correcte`);
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <UserProvider>
          <NotesProvider>
            <CategoriesProvider>
              <RouterProvider router={router} />
            </CategoriesProvider>
          </NotesProvider>
        </UserProvider>
      </ModalProvider>
    </AuthProvider>
  </StrictMode>
);
