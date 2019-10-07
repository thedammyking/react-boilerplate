import { setToken } from 'libs';
import { LOGIN, LOGOUT } from '../actions/types';

const localStorageMiddleware = store => next => action => {
  if (action.type === LOGIN) {
    let token;
    if (!action.error) {
      token = action.token;
      window.localStorage.setItem('jwt', token);
      setToken(token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.removeItem('jwt');
    setToken(null);
  }

  next(action);
};

export default localStorageMiddleware;
