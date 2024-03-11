import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test";
import Layout from "../layout";
import Navbar from "../components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navbar />,
        children: [
          {
            path: "test",
            element: <Test />,
          },
        ],
      },
    ],
  },
]);
