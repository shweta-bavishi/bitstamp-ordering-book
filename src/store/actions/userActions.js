import {Action} from './actionTypes';

export const loginUser = user => ({
  type: Action.ATTEMPT_LOGIN,
  user,
});

export const logoutUser = () => ({
  type: Action.ATTEMPT_LOGOUT,
});
