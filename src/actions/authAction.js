import authService from '../services/authService';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken.js';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

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
      const { token } = ret;
      localStorage.setItem('jwToken', token);
      //设置axios的headers token
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(authAction(AUTH_SUCCESS, ret));
      dispatch(setCurrentUser(decoded));
    } catch (e) {
      dispatch(authAction(AUTH_FAILURE, { msg: 'Something wrong!' }));
      return;
    }
  };
}

export const setCurrentUser = (decoded) => {
  // 设置type,下一步return到reducers/authReducer.js中
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// 退出功能
export const logoutUser = () => (dispatch) => {
  // 移除本地存储信息
  localStorage.removeItem('jwToken');
  setAuthToken(false);
  // 分发到reducer中,传空对象后传入reducer就是空对象
  dispatch(setCurrentUser({}));
};
