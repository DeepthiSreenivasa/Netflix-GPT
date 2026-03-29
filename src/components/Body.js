import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
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
      element: <AppLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default Body;
