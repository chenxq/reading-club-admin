import {
  RETURN_START_REQUEST,
  RETURN_SUCCESS_REQUEST,
  RETURN_FAILURE_REQUEST,
} from '../actions/returnBook';

const initialState = {
  loading: 'init',
  msg: '未知原因',
};

export default function returnBookReducer(state = initialState, action) {
  switch (action.type) {
    case RETURN_START_REQUEST: {
      return {
        ...state,
        msg: action.payload,
        loading: 'start',
      };
    }
    case RETURN_SUCCESS_REQUEST: {
      return {
        ...state,
        msg: action.payload.msg,
        loading: 'success',
      };
    }
    case RETURN_FAILURE_REQUEST: {
      return {
        ...state,
        msg: action.payload.msg,
        loading: 'failed',
      };
    }
    default:
      return state;
  }
}
