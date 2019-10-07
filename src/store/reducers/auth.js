import {
  LOGIN,
  ASYNC_START,
  LOG_ERROR,
  LOGIN_PAGE_UNLOADED,
} from "../actions/types"

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        inProgress: false,
        errors: action.error || null,
      }
    case ASYNC_START:
      if (action.subtype === LOGIN) {
        return {
          ...state,
          inProgress: true,
        }
      }
      return state
    case LOG_ERROR:
      return {
        ...state,
        inProgress: false,
        error: action.error || "Sorry, something went wrong. Please try again",
      }
    case LOGIN_PAGE_UNLOADED:
      return {}
    default:
      return state
  }
}
