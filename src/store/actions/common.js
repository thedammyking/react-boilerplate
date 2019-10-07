import { window } from 'browser-monads';
import { APP_LOAD, REDIRECT } from './types';
import { setToken } from 'libs';

export const onAppLoad = () => {
  const token = window.localStorage.getItem('jwt');
  if (token) {
    setToken(token);
  }
  return {
    type: APP_LOAD,
    token
  };
};

export const onRedirect = () => ({
  type: REDIRECT
});
