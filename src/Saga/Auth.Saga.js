import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ActionType from "./ActionTypes";
import { signinApi, signupApi } from "../Common/Auth.api";
import { setAlert } from "./Action/Alert.Action";
import { signedinAction } from "./Action/Action";
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
