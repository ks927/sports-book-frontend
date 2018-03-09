/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, REQUEST_USERS, GOT_USERS,
} from './constants';

const initialState = fromJS({
  requesting: false,
  gotUsers: false,
  users: [],
});

function globalReducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_USERS:
      return state
          .set('requesting', true);
    case GOT_USERS:
      return state
          .set('requesting', false)
          .set('gotUsers', true)
          .set('users', action.response.data);
    default:
      return state;
  }
}

export default globalReducer;
