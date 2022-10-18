import {Action} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.ATTEMPT_LOGIN:
      return {
        ...state,
        user: {...action.user, isLoggedIn: true},
      };
    case Action.ATTEMPT_LOGOUT:
      return {
        ...state,
        user: {
          user: null,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};
