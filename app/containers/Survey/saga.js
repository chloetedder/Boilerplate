import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SUBMIT_LOGIN } from './constants';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectEmail, makeSelectPassword } from 'containers/Survey/selectors';
import { loginFailed, loginSuccess } from './actions';
/**
 * Github repos request/response handler
 */
export function* postLogin() {
  // Select username from store
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `https://www.myserver.com/login?username=${email}&password=${password}`;

  try{
        const nextRoute = yield call(request, requestURL);
        yield put(loginSuccess(nextRoute, email));
    } catch(err){
        yield put(loginFailed(err));
    }

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitLogin() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SUBMIT_LOGIN, postLogin);
}