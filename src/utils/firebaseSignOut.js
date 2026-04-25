
import { signOut } from "firebase/auth";

const logOutApi = (auth) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export default logOutApi;
