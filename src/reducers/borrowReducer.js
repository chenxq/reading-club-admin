import {
  BORROW_START_REQUEST,
  BORROW_SUCCESS_REQUEST,
  BORROW_FAILURE_REQUEST,
} from '../actions/borrowAction';

const initialState = {
  loading: 'init',
};

export default function borrowReducer(state = initialState, action) {
  switch (action.type) {
    case BORROW_START_REQUEST: {
      return {
        ...state,
        msg: action.payload,
        loading: 'start',
      };
    }
    case BORROW_SUCCESS_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: 'success',
      };
    }
    case BORROW_FAILURE_REQUEST: {
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
