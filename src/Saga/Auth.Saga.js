import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ActionType from "./ActionTypes";
import { signinApi, signupApi } from "../Common/Auth.api";

function* signup(action) {
  try {
    const user = yield call(signupApi, action.payload);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

function* signin (action) {
  try{
    const user = yield call(signinApi, action.payload);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

function* watchSignup() {
  yield takeEvery(ActionType.SIGN_UP, signup);
}

function* watchSignin() {
  yield takeEvery(ActionType.SIGN_IN, signin);
}

export function* authsaga() {
   yield all([
      watchSignup(),
      watchSignin()
   ]);
}
