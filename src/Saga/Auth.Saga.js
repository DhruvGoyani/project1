import { all, call, put, takeEvery, } from 'redux-saga/effects'
import Api from '...'
import { signupApi } from '../../common/api/auth.api';

function* signup(action) {
   try {
      const user = yield call(Api.signupApi, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignup() {
  yield takeEvery("SIGN_UP", signup);
}

function* authsaga(){
    yield all({
        watchSignup
    })
}