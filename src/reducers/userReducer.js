import {
  FAILURE_REQUEST,
  START_REQUEST,
  SUCCESS_REQUEST,
} from '../actions/userAction';

const initialState = {
  loading: true,
  userListArray: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST: {
      return { ...state, loading: true };
    }
    case SUCCESS_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }
    case FAILURE_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }
    default:
      return initialState;
  }
}
