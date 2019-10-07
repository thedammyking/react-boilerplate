import {
  LOGIN,
  LOGOUT,
  ASYNC_START,
  LOG_ERROR,
  LOGIN_PAGE_UNLOADED
} from './types';
import Auth from 'services/auth';

const login = data => ({
  type: LOGIN,
  ...data
});

const onLoginPageUnload = () => ({
  type: LOGIN_PAGE_UNLOADED
});

export const logout = () => dispatch =>
  dispatch({
    type: LOGOUT
  });

export const loginRequest = body => dispatch => {
  dispatch({
    type: ASYNC_START,
    subtype: LOGIN
  });
  return Auth.login(body)
    .then(data => {
      const { token, status } = data;
      if (status === 200) {
        dispatch(
          login({
            token
          })
        );
        dispatch(onLoginPageUnload());
        return data;
      }
      dispatch({
        type: LOG_ERROR
      });
      return null;
    })
    .catch(({ response }) => {
      if (response !== undefined && response.data.message) {
        dispatch({
          type: LOG_ERROR,
          error: response.data.message
        });
        return null;
      }
      dispatch({
        type: LOG_ERROR
      });
      return null;
    });
};
