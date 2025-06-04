import { createBrowserRouter } from "react-router";
import App from "./App";
import Connection from "./pages/Connection/Connection";
import NewAccount from "./pages/NewAccount/NewAccount";
import Home from "./pages/Home/Home";
import AuthConnection from "./pages/utils/AuthConnection";

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
