import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { REQUEST_USERS, GOT_USERS } from '../App/constants';

const API_URL = 'http://localhost:3001/api/v1/users';

export function* getUsers() {
  console.log('saga getusers');

  const options = {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = yield call(request, API_URL, options);
    console.log('sgag res', response);
    yield put({ type: GOT_USERS, response });
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* userWatcher() {
  console.log('saga');
  yield takeLatest(REQUEST_USERS, getUsers);
}
