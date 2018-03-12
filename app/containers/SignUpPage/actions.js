/*
 *
 * SignUpPage actions
 *
 */

import {
  DEFAULT_ACTION, SUBMIT_FORM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitForm(name, email, password) {
  console.log('action', name, email, password);
  return {
    type: SUBMIT_FORM,
    name,
    email,
    password,
  };
}
