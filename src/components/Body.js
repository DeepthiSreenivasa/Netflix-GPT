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
import { onAuthStateChanged, beforeAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Gpt from "./Gpt";


const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Initial auth check - runs once at setup, only navigates on first load or actual logout
    onAuthStateChanged(auth, (user) => {
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
        { path: "moviesGPT",element: <Gpt/>}
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default Body;
