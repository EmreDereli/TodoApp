import {SET_USER} from './UserActionTypes';

export const setUser = data => ({
  type: SET_USER,
  payload: data,
});
