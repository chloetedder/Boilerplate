import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SUBMIT_SURVEY } from './constants';
import { LOAD_SURVEY } from 'containers/App/constants';
import { surveyLoaded, surveyLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectAge, makeSelectColor, makeSelectFood, makeSelectMississippi, makeSelectDog, makeSelectError } from './selectors';
import { surveyFailed, surveySuccess } from './actions';
/**
 * Github repos request/response handler
 */
export function* postSurvey() {
  // Select username from store
  const food = yield select(makeSelectFood());
  const age = yield select(makeSelectAge());
  const color = yield select(makeSelectColor());
  const dog = yield select(makeSelectDog());
  const mississippi = yield select(makeSelectMississippi());
  const requestURL = `https://www.myserver.com/submit`;

  try{
        const nextRoute = yield call(request, requestURL);
        yield put(surveyLoaded(age, color, food, mississippi, dog));
    } catch(err){
        yield put(surveyLoadingError(err));
    }

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitSurvey() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SURVEY, postSurvey);
}