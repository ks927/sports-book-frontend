/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GOT_USER_SHOW,
} from './constants';

const initialState = fromJS({
  requesting: false,
  userShow: {},
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GOT_USER_SHOW:
      return state
        .set('userShow', action.response.data);
    default:
      return state;
  }
}

export default profilePageReducer;
