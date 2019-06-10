import axios from "axios";

const START_REQUEST = "START_REQUEST";
const SUCCESS_REQUEST = "SUCCESS_REQUEST";
const FAILURE_REQUEST = "FAILURE_REQUEST";

export { START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST };

function userList(actionType, userListArray = {}) {
  return {
    type: actionType,
    payload: { userListArray }
  };
}

export default function getUserList() {
  return dispatch => {
    dispatch(userList(START_REQUEST));
    axios
      .get("https://reading-club-backend.herokuapp.com/users")
      .then(res => {
        var list = res.data.message;
        console.log("------>", list);
        dispatch(userList(SUCCESS_REQUEST, list));
      })
      .catch(error => {
        dispatch(userList(FAILURE_REQUEST, error));
      });
  };
}