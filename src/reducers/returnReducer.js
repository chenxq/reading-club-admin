import {
  RETURN_START_REQUEST,
  RETURN_SUCCESS_REQUEST,
  RETURN_FAILURE_REQUEST,
} from '../actions/returnAction';

const initialState = {
  loading: 'init',
  msg: 'init',
};

export default function returnReducer(state = initialState, action) {
  switch (action.type) {
    case RETURN_START_REQUEST: {
      return {
        ...state,
        loading: 'init',
        msg: action.payload,
      };
    }
    case RETURN_SUCCESS_REQUEST: {
      return {
        ...state,
        loading: 'success',
        msg: action.payload,
      };
    }
    case RETURN_FAILURE_REQUEST: {
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
