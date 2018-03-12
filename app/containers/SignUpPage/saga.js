import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';
import { SUBMIT_FORM, SUBMIT_FAILURE, SUBMIT_SUCCESS } from './constants';
import { API_URL } from '../UserPage/saga';

export function* doSignUp(action) {
  console.log('action saga', action);
  const data = {
    name: action.name,
    email: action.email,
    password: action.password,
  };
  console.log('data', data);

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = yield call(request, API_URL, options);
    console.log('response', response);
    yield put(push(`/users/${response.data.id}`));
    yield put({ type: SUBMIT_SUCCESS, response });
  } catch (error) {
    const err = yield error.then((resp) => resp); // eslint-disable-line (semi)
    const errorMessage = JSON.parse(err).data;
    yield put({ type: SUBMIT_FAILURE, err: errorMessage });
    console.log(errorMessage);
  }
}

// Individual exports for testing
export default function* siignUpWatcher() {
  yield takeLatest(SUBMIT_FORM, doSignUp);
}
