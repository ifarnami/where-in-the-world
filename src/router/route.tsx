import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test";
import Layout from "../layout";
import Navbar from "../components/Navbar";
import CountriesProvider from "../providers/CountriesProvider";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailPage";

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
            path: "/country/:countryId",
            element: (
              <CountriesProvider>
                <DetailsPage />
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
