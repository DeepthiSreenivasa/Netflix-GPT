import { signInWithEmailAndPassword } from "firebase/auth";

const signInApi = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        accessToken: user.accessToken,
      };
    })
    .catch((error) => {
      console.log("Error from Backend")
      throw error;
    });
};

export default signInApi;
