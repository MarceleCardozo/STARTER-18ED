import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}
export default AppRoutes;
