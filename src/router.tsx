import { createBrowserRouter } from "react-router";
import App from "./App";
import Auth from "./pages/Auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
    ],
  },
]);

export const rootElement = document.getElementById("root");
