import { getAuth, createUserWithEmailAndPassword , sendEmailVerification , onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase";

export const signupApi = (values) => {

    console.log("rrrrrrrr");
  console.log("signupApi", values );

  return new Promise((resolve, reject) => {

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        
        const user = userCredential.user;

        onAuthStateChanged(auth , (user) => {
            if (user) {
                sendEmailVerification(user)
            }
            else {

            }
        })
      })
      .then((user) => {
        onAuthStateChanged (auth , (user) => {
            if (user.emailVerified ) {
                console.log("emailVerified");
                resolve({payload: "email registered"});
            } else {
                console.log("please Email verified");
                resolve ({payload: "please verified email"});
            }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode.localeCompare("auth/email-already-in-use")=== 0){
            reject({payload : "already use email"});
          }
          else{
          reject({payload : errorCode});
          }
      });
  });
};
