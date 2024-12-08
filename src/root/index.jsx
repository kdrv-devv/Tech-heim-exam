import { createBrowserRouter } from "react-router-dom";
import { Basket, Details, Home } from "../pages";

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
    path: "/details",
    element: <Details />,
  },
]);
