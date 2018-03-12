/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, SUBMIT_FAILURE, SUBMIT_SUCCESS,
} from './constants';

const initialState = fromJS({
  requesting: false,
  successful: false,
  messages: '',
  errors: [],
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SUCCESS:
      return state
        .set('requesting', false)
        .set('successful', true)
        .set('messagees', action.response.message);
    case SUBMIT_FAILURE:
      return state
        .set('successful', false)
        .set('requesting', false)
        .set('errors', action.err);
    default:
      return state;
  }
}

export default signUpPageReducer;
