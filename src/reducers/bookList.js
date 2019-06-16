import { FAILURE_REQUEST, START_REQUEST, SUCCESS_REQUEST } from '../actions/getBookList';

const initialState = {
  loading: true,
  bookListArray: []
};

export default function getBookList(state = initialState, action) {
  console.log('reducer', state, action);
  console.log('action type: ', action.type);
  switch (action.type) {
    case START_REQUEST: {
      return { ...state, loading: true };
    }
    case SUCCESS_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    }
    case FAILURE_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
