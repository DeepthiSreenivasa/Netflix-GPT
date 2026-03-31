import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { removeUser, storeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    //executes when state of authentication of app changes -> login -> logout
    //how does auth state get changed, whenever we have firebase SignIn, SignUp API that gets called

    onAuthStateChanged(auth, (user) => {
      console.log("Into onAuth State Changed");
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        dispatch(
          storeUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

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
