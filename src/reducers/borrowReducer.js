import {
  BORROW_START_REQUEST,
  BORROW_SUCCESS_REQUEST,
  BORROW_FAILURE_REQUEST,
} from '../actions/borrowAction';

const initialState = {
  loading: 'init',
  msg: 'init',
};

export default function borrowReducer(state = initialState, action) {
  switch (action.type) {
    case BORROW_START_REQUEST: {
      return {
        ...state,
        loading: 'init',
        msg: action.payload,
      };
    }
    case BORROW_SUCCESS_REQUEST: {
      return {
        ...state,
        loading: 'success',
        msg: action.payload,
      };
    }
    case BORROW_FAILURE_REQUEST: {
      return {
        ...state,
        loading: 'failed',
        msg: action.payload,
      };
    }
    default:
      return state;
  }
}
