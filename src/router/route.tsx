import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "test",
    element: <Test />,
  },
]);
