import {
  POST_BOOK_START,
  POST_BOOK_SUCCESS,
  POST_BOOK_FAILURE,
} from '../actions/addBookAction';

const initialState = {
  loading: true,
  bookInfo: {},
};

export default function addBookReducer(state = initialState, action) {
  console.log('reducer', state, action);
  console.log('action type: ', action.type);
  switch (action.type) {
    case POST_BOOK_START: {
      return { ...state, loading: true };
    }
    case POST_BOOK_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }
    case POST_BOOK_FAILURE: {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
