import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../components/layout";
import routes from "./routes";
import ErrorPage from "../error-page";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <div>INDEX</div>, index: true },
      { path: routes.test, element: <div>TEST PAGE</div> },
    ],
  },
]);

export default routing;
