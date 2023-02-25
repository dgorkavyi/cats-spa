import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../components/layout";
import routes from "./routes";
import ErrorPage from "../error-page";
import Index from "../components/index";
import Gallery from "../components/gallery";
import Breeds from "../components/breeds";
import Voting from "../components/voting";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Index />, index: true },
      { path: routes.voting, element: <Voting /> },
      { path: routes.breeds, element: <Breeds /> },
      { path: routes.gallery, element: <Gallery /> },
    ],
  },
]);

export default routing;
