import userService from '../services/userService';

const START_REQUEST = 'START_REQUEST';
const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
const FAILURE_REQUEST = 'FAILURE_REQUEST';

export { START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST };

function userList(actionType, userListArray = []) {
  return {
    type: actionType,
    payload: { userListArray: userListArray },
  };
}

export default function getUserList() {
  return async (dispatch) => {
    dispatch(userList(START_REQUEST));
    try {
      const users = await userService();
      dispatch(userList(SUCCESS_REQUEST, users));
      return users;
    } catch (error) {
      console.error('Users error:', error);
      dispatch(userList(FAILURE_REQUEST, error));
    }
  };
}
