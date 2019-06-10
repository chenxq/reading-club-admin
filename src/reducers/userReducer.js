import {
  FAILURE_REQUEST,
  START_REQUEST,
  SUCCESS_REQUEST
} from "../actions/userAction";

const initialState = {
  loading: "init",
  userListArray: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST: {
      return { loading: "init" };
    }
    case SUCCESS_REQUEST: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FAILURE_REQUEST: {
      return {
        ...state,
        loading: "failed"
      };
    }
    default:
      return state;
  }
}
