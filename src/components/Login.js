import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
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
            ></input>
          )}

          <input
            className="rounded px-4 py-3"
            type="text"
            placeholder="Email"
          ></input>
          <input
            className="rounded px-4 py-3"
            type="password"
            placeholder="Password"
          ></input>
          <button className="rounded bg-red-600 px-4 py-3">Sign In</button>
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
