import { APP_LOAD, REDIRECT, LOGOUT, LOGIN } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
      };
    case REDIRECT:
      return {
        ...state,
        redirectTo: null,
      };
    case LOGIN:
      return {
        ...state,
        redirectTo: '/',
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        redirectTo: '/login',
        token: null,
      };
    default:
      return state;
  }
};
