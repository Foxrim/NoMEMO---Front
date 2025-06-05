import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router, rootElement } from "./router.tsx";
import { RouterProvider } from "react-router";
import "./index.css";
import { AuthProvider } from "./pages/Connection/context/Auth.provider.tsx";
import { HeaderProvider } from "./components/Header/context/Header.provider.tsx";
import { AccountProvider } from "./components/Account/context/Account.provider.tsx";

if (rootElement == null) {
  throw new Error(`La route utilisé n'est pas correcte`);
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <HeaderProvider>
        <AccountProvider>
          <RouterProvider router={router} />
        </AccountProvider>
      </HeaderProvider>
    </AuthProvider>
  </StrictMode>
);
