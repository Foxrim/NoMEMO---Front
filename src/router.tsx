import { createBrowserRouter } from "react-router";
import App from "./App";
import Auth from "./pages/Auth/Auth";
import NewAccount from "./pages/NewAccount/NewAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
      {
        path: "create-account",
        element: <NewAccount />
      }
    ],
  },
]);

export const rootElement = document.getElementById("root");
