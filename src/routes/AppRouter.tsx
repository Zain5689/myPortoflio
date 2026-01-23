import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Error, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
