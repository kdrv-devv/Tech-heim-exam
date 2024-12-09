import { createBrowserRouter } from "react-router-dom";
import { Basket, Details, Home } from "../pages";
import Seleres from "../components/seleres";

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
    path: "/products/:id",
    element: <Details/>,
  },
  {
    path: "/seleres/:id",
    element: <Seleres/>,
  },
]);
