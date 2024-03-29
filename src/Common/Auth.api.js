import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../FireBase";
import { GoogleAuthProvider } from "firebase/auth";

export const signupApi = (values) => {
  console.log("signupApi", values);

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;

        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user.emailVerified) {
            resolve({ payload: "Eail Registred" });
          } else {
            sendEmailVerification(user)
              .then(() => {
                resolve({ payload: "Please Verified Email." });
              })
              .catch((e) => {});
          }
        });
      })
      // .then((user) => {
      //   onAuthStateChanged(auth, (user) => {
      //     if (user.emailVerified) {
      //       console.log("email Verified");
      //       resolve({ payload: "email registered" });
      //     } else {
      //       console.log("please Email verified");
      //       resolve({ payload: "please verified email" });
      //     }
      //   });
      // })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject({ payload: "already use email" });
        } else {
          reject({ payload: errorCode });
        }
      });
  });
};

export const signinApi = (values) => {
  console.log("signinApi", values);

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          resolve({ payload: user });
        } else {
          reject({ payload: "Please first verified Email." });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode.localeCompare("auth/wrong-password") === 0) {
          reject({ payload: "Check Email & Passsword" });
        } else {
          reject({ payload: errorCode });
        }
      });
  });
};

export const GoogleSigninApi = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        resolve({ payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        reject({ payload: errorCode });
      });
  });
};

export const logOutApi = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: "logout successfully" });
      })
      .catch((error) => {
        reject({ payload: error.Code });
      });
  });
};

export const ForgatePasswordApi = (values) => {
  console.log(values);
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, values.email)
    .then(() => {
      resolve({ payload: "please check youe email." });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      reject({ payload: errorCode});

    });
  });
};
