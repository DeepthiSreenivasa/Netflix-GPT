import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logOutApi from "../utils/firebaseSignOut";
import { auth } from "../utils/firebase";

const Header = () => {
  const userDetails = useSelector((store) => store.user);
  const isLoggedIn = Object.keys(userDetails).length > 0;
  console.log("isLoggedIn::", isLoggedIn);

  const handleLogOut = () => {
    console.log("userDetails::", userDetails);
    logOutApi(auth)
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/80 px-4 py-3 md:px-8">
        <img
          className="w-28 md:w-40"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        ></img>
        {isLoggedIn ? (
          <>
            <div className="text-white">
              {userDetails?.email ? `Hello ${userDetails.email}` : ""}
            </div>
            <div>
              <button
                className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Header;
