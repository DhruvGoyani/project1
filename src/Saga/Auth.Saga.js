import { all, call, put, takeEvery, } from 'redux-saga/effects'
import { signupApi } from '../Common/Auth.api';
import * as ActionType from './ActionTypes'

function* signup(action) {
   try {
      const user = yield call(signupApi, action.payload);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignup() {
  yield takeEvery(ActionType.SIGN_UP, signup);
}

export function* authsaga(){
    yield all([
        watchSignup()
        ])
}