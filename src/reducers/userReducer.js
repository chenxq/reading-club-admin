import {
  USER_LIST_START_REQUEST,
  USER_LIST_SUCCESS_REQUEST,
  USER_LIST_FAILURE_REQUEST,
} from '../actions/getUserListAction';

const initialState = {
  loading: true,
  userListArray: [],
};

export default function userReducer(state = initialState, action) {
  console.log('reducer', state, action);
  console.log('action type: ', action.type);
  switch (action.type) {
    case USER_LIST_START_REQUEST: {
      return { ...state, loading: true };
    }
    case USER_LIST_SUCCESS_REQUEST: {
      return {
        ...state,
        userListArray: action.payload.message || [],
        msg: null,
        loading: false,
      };
    }
    case USER_LIST_FAILURE_REQUEST: {
      return {
        ...state,
        userListArray: action.payload.message || [],
        msg: null,
        loading: false,
      };
    }
    default:
      return state;
  }
}
