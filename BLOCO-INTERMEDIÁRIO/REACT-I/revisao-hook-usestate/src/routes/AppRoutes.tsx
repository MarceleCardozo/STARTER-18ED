import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contador from "../pages/Contador";
import Formulario from "../pages/Formulario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contador />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
