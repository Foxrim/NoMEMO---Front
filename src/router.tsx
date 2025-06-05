import { createBrowserRouter } from "react-router";
import App from "./App";
import Connection from "./pages/Connection/Connection";
import NewAccount from "./pages/NewAccount/NewAccount";
import Home from "./pages/Home/Home";
import AuthConnection from "./pages/guard/AuthConnection";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import TokenVerify from "./pages/guard/TokenVerify";

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
        element: <Connection />
      },
      {
        path: "create-account",
        element: <NewAccount />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "verify",
        element: <TokenVerify />,
      },
      {
        path: "new-password",
        element: <NewPassword />
      },

      // Uniquement connecté
      {
        path: "/",
        element: <AuthConnection />,
        children: [
          {
            path: "home",
            element: <Home />
          }
        ]
      },

    ],
  },
]);

export const rootElement = document.getElementById("root");
