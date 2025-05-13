import { createBrowserRouter } from "react-router";

import PageNotFound from "./pages/PageNotFound.tsx";

import Favorites from "./pages/Favorites";
import Layout from "./pages/Layout";
import Home from "./pages/Home.tsx";
import Watch from "./pages/Watch.tsx";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/watch/:movieId",
        Component: Watch,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
