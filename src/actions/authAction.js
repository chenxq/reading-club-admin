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
  return async (dispatch) => {
    dispatch(authAction(AUTH_START));
    try {
      const ret = await authService(authInfo);
      if (!ret) {
        dispatch(authAction(AUTH_FAILURE, { msg: 'Something wrong!' }));
        return;
      }
      const { token, role } = ret;
      localStorage.setItem('jwToken', token);
      localStorage.setItem('role', role);
      //设置axios的headers token
      setAuthToken(token);
      dispatch(authAction(AUTH_SUCCESS, ret));
    } catch (e) {
      dispatch(authAction(AUTH_FAILURE, { msg: 'Something wrong!' }));
      return;
    }
  };
}

export const logoutUserAction = () => (dispatch) => {
  localStorage.removeItem('jwToken');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  setAuthToken(false);
  dispatch(authAction(AUTH_SUCCESS, {}));
};
