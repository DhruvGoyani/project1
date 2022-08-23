import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";

export const signupApi = (values) => {
  console.log("signupApi", values);

  return new Promise((resolve, reject) => {

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  });
};
