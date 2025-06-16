import { createBrowserRouter } from "react-router";
import App from "./App";
import Connection from "./pages/Connection/Connection";
import NewAccount from "./pages/NewAccount/NewAccount";
import AuthConnection from "./pages/guard/AuthConnection";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import TokenVerifyPassword from "./pages/guard/TokenVerifyPassword";
import TokenVerifyEmail from "./pages/guard/TokenVerifyEmail";
import NewEmail from "./pages/NewEmail/NewEmail";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import NotesPage from "./pages/NotesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Connection />,
      },
      {
        path: "login",
        element: <Connection />,
      },
      {
        path: "create-account",
        element: <NewAccount />,
      },
      {
        path: "confirm-email",
        element: <ConfirmEmail />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-password",
        element: <TokenVerifyPassword />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },

      // Uniquement connecté
      {
        path: "/",
        element: <AuthConnection />,
        children: [
          {
            path: "home/:pseudo",
            element: <NotesPage />,
          },
          {
            path: "verify-email",
            element: <TokenVerifyEmail />,
          },
          {
            path: "new-email",
            element: <NewEmail />,
          },
        ],
      },
    ],
  },
]);

export const rootElement = document.getElementById("root");
