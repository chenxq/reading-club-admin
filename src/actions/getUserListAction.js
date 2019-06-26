import fetchUserListService from '../services/userListService';

const USER_LIST_START_REQUEST = 'USER_LIST_START_REQUEST';
const USER_LIST_SUCCESS_REQUEST = 'USER_LIST_SUCCESS_REQUEST';
const USER_LIST_FAILURE_REQUEST = 'USER_LIST_FAILURE_REQUEST';

export {
  USER_LIST_START_REQUEST,
  USER_LIST_SUCCESS_REQUEST,
  USER_LIST_FAILURE_REQUEST,
};

function userList(actionType, payload = {}) {
  return {
    type: actionType,
    payload,
  };
}

export default function getUserList() {
  return async (dispatch) => {
    dispatch(userList(USER_LIST_START_REQUEST));
    try {
      const ret = await fetchUserListService();
      if (!ret) {
        dispatch(
          userList(USER_LIST_FAILURE_REQUEST, { msg: 'Something wrong!' }),
        );
        return;
      }
      dispatch(userList(USER_LIST_SUCCESS_REQUEST, ret));
      return ret;
    } catch (e) {
      dispatch(
        userList(USER_LIST_FAILURE_REQUEST, { msg: 'Something wrong!' }),
      );
      return;
    }
  };
}
