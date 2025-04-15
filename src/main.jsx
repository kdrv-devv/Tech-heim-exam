import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./root";
import { MyProvider } from "./context/add-bag";
import { LikedProvider } from "./context/add-liked";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <LikedProvider>
    <RouterProvider router={root} />
    </LikedProvider>
  </MyProvider>
);
