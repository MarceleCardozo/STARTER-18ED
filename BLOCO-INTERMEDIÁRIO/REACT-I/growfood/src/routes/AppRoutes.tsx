import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },    
    {
      path: "/menu",
      element: <Menu />,
    },
  ]);
  
  function AppRoutes() {
    return <RouterProvider router={router} />;
  }
  
  export default AppRoutes;

  