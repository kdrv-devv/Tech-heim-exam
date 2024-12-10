import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./root";
import { MyProvider } from "./context/add-bag";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <RouterProvider router={root} />
  </MyProvider>
);
