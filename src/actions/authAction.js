import authService from '../services/authService';
import setAuthToken from '../utils/setAuthToken.js';

const AUTH_START = 'AUTH_START';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';

export { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, authAction };

function authAction(actionType, payload) {
  return {
    type: actionType,
    payload,
  };
}

export default function auth(authInfo) {
  return async (dispatch, getState) => {
    dispatch(authAction(AUTH_START));
    try {
      const ret = await authService(authInfo);
      if (!ret) {
        return dispatch(authAction(AUTH_FAILURE, { msg: 'Something wrong!' }));
      }
      const { token } = ret;
      localStorage.setItem('jwToken', token);
      //设置axios的headers token
      setAuthToken(token);
      return dispatch(authAction(AUTH_SUCCESS, ret));
    } catch (e) {
      return dispatch(authAction(AUTH_FAILURE, { msg: 'Something wrong!' }));
      // return;
    }
  };
}

export const logoutUserAction = () => (dispatch) => {
  localStorage.removeItem('jwToken');
  setAuthToken(false);
  dispatch(authAction(AUTH_SUCCESS, {}));
};
