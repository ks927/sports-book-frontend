import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { REQUEST_USER_SHOW, GOT_USER_SHOW } from './constants';

const API_URL = 'http://localhost:3001/api/v1/users';
export function* getUserShow(action) {
  console.log('saga getusershow', action);

  const userId = action.id;
  const UserShowApi = `${API_URL}/${userId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = yield call(request, UserShowApi, options);
    console.log('sgag res', response);
    yield put({ type: GOT_USER_SHOW, response });
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* userShowWatcher() {
  console.log('saga');
  yield takeLatest(REQUEST_USER_SHOW, getUserShow);
}
