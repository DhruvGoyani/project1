import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ActionType from "./ActionTypes";
import { ForgatePasswordApi, GoogleSigninApi, logOutApi, signinApi, signupApi } from "../Common/Auth.api";
import { setAlert } from "./Action/Alert.Action";
import { ForgatedPasswordAction, ForgatePasswordAction, loggedOutAction, signedinAction } from "./Action/Action";
import { history } from "../History";

function* signup(action) {
  try {
    const user = yield call(signupApi, action.payload);
    // console.log(user);
    yield put (setAlert({text: user.payload , color: "success"}))
  } catch (e) {
    // console.log(e);
    yield put (setAlert({text: e.payload , color: "error"}))
  }
}

function* signin (action) {
  try{
    const user = yield call(signinApi, action.payload);
    console.log(user);  
    yield put (signedinAction(user.payload))
    history.push("/")
    yield put (setAlert({text: "Login Successfully" , color: "success"}))
  } catch (e) {
    console.log(e);
    yield put (setAlert({text: e.payload , color: "error"}))
  }
}

function* googleSignIn (action) {
  try{
    const user = yield call (GoogleSigninApi)
    yield put (signedinAction(user.payload))
    history.push("/")
    yield put (setAlert({text: "Login Successfully" , color: "success"}))
  } catch(e){
    yield put (setAlert({text: e.payload , color: "error"}))
  }
}

function* logOut () {
  try{
    const user = yield call (logOutApi  )
    yield put (loggedOutAction(user.payload))
    history.push("/")
    yield put (setAlert({text: "Logout Successfully" , color: "success"}))
  } catch (e) {
    yield put (setAlert({text: e.payload , color : "error"}))
  }
}

function* forgatePassword (action ) {
  console.log(action.payload);
  try{
    const user = yield call (ForgatePasswordApi , action.payload)
    console.log(user);
    yield put (ForgatedPasswordAction(user.payload))
    history.push("/")
    yield put (setAlert({text: "Password Change Successfully" , color: "success"}))
  } catch (e) {
    console.log(e);
    yield put (setAlert({text: e.payload , color : "error"}))
  }
}

function* watchSignup() {
  yield takeEvery(ActionType.SIGN_UP, signup);
}

function* watchSignin() {
  yield takeEvery(ActionType.SIGN_IN, signin);
}

function* watchGoogleSignin() {
  yield takeEvery(ActionType.GOOGLE_SIGN_IN, googleSignIn);
}

function* watchlogOut () {
  yield takeEvery(ActionType.LOG_OUT, logOut);
}

function* watchForgatePassword (values) {
  yield takeEvery(ActionType.FORGATE_PASSWORD, forgatePassword);

}

export function* authsaga() {
   yield all([
      watchSignup(),
      watchSignin(),
      watchlogOut(),
      watchGoogleSignin(),
      watchForgatePassword(),
   ]);
}
