import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "login", element: <Login /> },
        { path: "browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default Body;
