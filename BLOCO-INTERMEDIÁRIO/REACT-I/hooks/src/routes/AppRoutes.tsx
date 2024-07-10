import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Count from "../pages/Count";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/count",
    element: <Count />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
