import {
  POST_BOOK_START,
  POST_BOOK_SUCCESS,
  POST_BOOK_FAILURE,
} from '../actions/addBookAction';

const initialState = {
  loading: 'init',
  bookInfo: {},
};

export default function addBookReducer(state = initialState, action) {
  switch (action.type) {
    case POST_BOOK_START: {
      return { ...state, loading: 'start' };
    }
    case POST_BOOK_SUCCESS: {
      return {
        ...state,
        bookInfo: action.payload,
        loading: 'success',
      };
    }
    case POST_BOOK_FAILURE: {
      return {
        ...state,
        bookInfo: {},
        error: action.payload,
        loading: 'failure',
      };
    }
    default:
      return state;
  }
}
