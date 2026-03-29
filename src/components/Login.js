import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import formValidator from "../utils/validator";
import signUpApi from "../utils/firebaseSignUpValidator";
import signInWithEmailAndPassword from "../utils/firebaseSignedInValidator";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { storeUser } from "../store/userSlice";

//import createUserWithEmailAndPassword from "../utils/firebaseAuthentication";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateFormFields = async () => {
    const message = formValidator(
      emailRef?.current?.value,
      passwordRef?.current?.value,
      isSignInForm ? undefined : nameRef?.current?.value,
    );
    setErrorMessage(message);

    if (message) return;

    try {
      if (isSignInForm) {
        const user = await signInWithEmailAndPassword(
          auth,
          emailRef?.current?.value,
          passwordRef?.current?.value,
        );
        dispatch(storeUser(user));
        navigate("/browse");
      } else {
        await signUpApi(
          auth,
          emailRef?.current?.value,
          passwordRef?.current?.value,
        );
        navigate("/login");
      }
    } catch (error) {
      console.log("Error::", error);
      setErrorMessage(`${error.code}: ${error.message}`);
    }
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
        alt="Background"
      ></img>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex min-h-screen items-center justify-center">
        <form className="flex w-full max-w-md flex-col gap-4 rounded-md bg-black/80 p-8  ">
          <h1 className="cursor-pointer text-center text-2xl text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              className="rounded px-4 py-3"
              type="text"
              placeholder="Full Name"
              ref={nameRef}
            ></input>
          )}

          <input
            className="rounded px-4 py-3"
            type="text"
            placeholder="Email"
            ref={emailRef}
          ></input>
          <input
            className="rounded px-4 py-3"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          ></input>
          <p className="text-red-700">{errorMessage}</p>
          <button
            className="rounded bg-red-600 px-4 py-3"
            onClick={(e) => {
              e.preventDefault();
              validateFormFields();
            }}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white">
            {isSignInForm ? "Do not have an account ?" : "Already a member?"}{" "}
            <span
              className="cursor-pointer hover:text-red-600"
              onClick={toggleSignIn}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
