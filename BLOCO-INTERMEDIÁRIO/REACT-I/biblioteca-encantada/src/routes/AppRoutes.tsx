import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
