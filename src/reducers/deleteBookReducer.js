import {
  DELETE_BOOK_START,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
} from '../actions/deleteBookAction';

const initialState = {
  loading: 'init',
  bookID: 0
  // bookInfo: {},
};

export default function deleteBookReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_BOOK_START: {
      return { ...state, loading: 'start' };
    }
    case DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        bookID: action.payload,
        loading: 'success',
      };
    }
    case DELETE_BOOK_FAILURE: {
      return {
        ...state,
        bookID: 0,
        error: action.payload,
        loading: 'failure',
      };
    }
    default:
      return state;
  }
}
