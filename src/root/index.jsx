import { createBrowserRouter } from "react-router-dom";
import { Basket, Details, Home } from "../pages";
import Seleres from "../components/seleres";
import Admin from "../pages/admin";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/products/:id",
    element: <Details/>,
  },
  {
    path: "/seleres/:id",
    element: <Seleres/>,
  },
  {
    path:"/admin",
    element:<Admin/>
  }
]);
