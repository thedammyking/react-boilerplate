import { setToken } from "../../utils/agents";
import { LOGIN, LOGOUT, REGISTER } from "../actions/types";

const localStorageMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    let token;
    if (!action.error) {
      token = action.token;
      window.localStorage.setItem("jwt", token);
      setToken(token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem("jwt", "");
    setToken(null);
  }

  next(action);
};

export default localStorageMiddleware ;
