import { createUserWithEmailAndPassword } from "firebase/auth";

const signUpApi = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export default signUpApi;
