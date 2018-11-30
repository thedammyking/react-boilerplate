import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  LOG_ERROR,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  RESET_PASS_PAGE_UNLOADED
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case REGISTER:
      return {
        ...state,
        redirectTo: "/auth/login"
      };
    case RESET_PASSWORD:
      return {
        ...state,
        redirectTo: "/auth/login",
        message: action.message
      };
    case LOGIN:
      return {
        ...state,
        redirectTo: "/",
        token: action.token || null
      };
    case LOG_ERROR:
      return {
        ...state,
        error: action.error || "Sorry, something went wrong. Please try again"
      };
    case LOGIN_PAGE_UNLOADED:
      return {
        ...state,
        error: null,
        message: null
      };
    case REGISTER_PAGE_UNLOADED:
    case RESET_PASS_PAGE_UNLOADED:
      return {
        ...state,
        error: null
      };
    case LOGOUT:
      return { ...state, redirectTo: "/", token: null };
    default:
      return state;
  }
};
