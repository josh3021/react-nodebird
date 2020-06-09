import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';
import { userAxios } from './utils/axios';

function loginAPI(loginData) {
  //서버에 요청을 보내는 부분
  return userAxios.post('/login', loginData, {
    withCredentials: true,
  });
}
function signUpAPI(signUpData) {
  return userAxios.post('/', signUpData);
}
function logoutAPI() {
  return userAxios.post('/logout', {}, { withCredentials: true });
}
function loadUserAPI() {
  return userAxios.get('/', { withCredentials: true });
}

function* login(action) {
  try {
    const user = yield call(loginAPI, action.data);
    // yield delay(2000);
    yield put({
      // put은 dispatch와 동일
      type: LOG_IN_SUCCESS,
      data: user.data,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    });
  }
}
function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    // yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.error(JSON.stringify(e));
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}
function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}
function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}
function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp), fork(watchLogout), fork(watchLoadUser)]);
}
