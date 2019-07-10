import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/authAction';

const initialState = {
  loading: 'init',
  authInfo: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START: {
      return { ...state, loading: 'start' };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        authInfo: action.payload,
        loading: 'success',
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        authInfo: {},
        error: action.payload,
        loading: 'failure',
      };
    }
    default:
      return state;
  }
}
