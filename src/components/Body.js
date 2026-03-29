import { RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    }
  ]);

  return (
    <>
      <RouterProvider router={appRoutes}></RouterProvider>
    </>
  );
};

export default Body;
