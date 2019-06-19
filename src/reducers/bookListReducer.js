import {
  FAILURE_REQUEST,
  START_REQUEST,
  SUCCESS_REQUEST,
} from '../actions/getBookListAction';

const initialState = {
  loading: 'start',
  bookListArray: [],
};

export default function getBookListReducer(state = initialState, action) {
  console.log('reducer', state, action);
  console.log('action type: ', action.type);
  switch (action.type) {
    case START_REQUEST: {
      return { ...state, loading: 'start' };
    }
    case SUCCESS_REQUEST: {
      return {
        ...state,
        bookListArray: action.payload.message || [],
        msg: null,
        loading: 'success',
      };
    }
    case FAILURE_REQUEST: {
      return {
        ...state,
        bookListArray: [],
        msg: action.payload.msg,
        loading: 'failure',
      };
    }
    default:
      return state;
  }
}
