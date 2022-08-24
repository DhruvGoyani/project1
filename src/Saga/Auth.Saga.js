import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ActionType from "./ActionTypes";
import { signupApi } from "../Common/Auth.api";

function* signup(action) {
  try {
    console.log("ssssss");
    const user = yield call(signupApi, action.payload);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

function* watchSignup() {
  console.log("wwwww");
  yield takeEvery(ActionType.SIGN_UP, signup);
}

export function* authsaga() {
   yield all([
      watchSignup()
   ]);
}
