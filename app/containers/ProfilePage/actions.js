/*
 *
 * ProfilePage actions
 *
 */

import {
  DEFAULT_ACTION, REQUEST_USER_SHOW,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUserShow(id) {
  return {
    type: REQUEST_USER_SHOW,
    id,
  };
}
