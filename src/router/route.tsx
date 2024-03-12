import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test";
import Layout from "../layout";
import Navbar from "../components/Navbar";
import CountriesProvider from "../context/CountriesProvider";
import HomePage from "../pages/HomePage";

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
            path: "/",
            element: (
              <CountriesProvider>
                <HomePage />
              </CountriesProvider>
            ),
          },
          {
            path: "test",
            element: <Test />,
          },
        ],
      },
    ],
  },
]);
