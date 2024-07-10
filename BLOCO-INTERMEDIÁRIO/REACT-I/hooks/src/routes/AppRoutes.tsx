import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Count from "../pages/Count";
import ShowMessage from "../pages/ShowMessage";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/show-message",
    element: <ShowMessage />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
