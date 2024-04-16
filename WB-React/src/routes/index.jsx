import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserRoutes from "./pageRoutes/UserRoutes";

const RootRoutes = () => {
  const router = createBrowserRouter([
    // { path: "/admin/*", Component: UserRoutes },
    { path: "/*", Component: UserRoutes },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;
