import returnService from '../services/returnBook';

export const BUTTON_LABEL = 'BUTTON_LABEL';

const RETURN_START_REQUEST = 'RETURN_START_REQUEST';
const RETURN_SUCCESS_REQUEST = 'RETURN_SUCCESS_REQUEST';
const RETURN_FAILURE_REQUEST = 'RETURN_FAILURE_REQUEST';

export { RETURN_START_REQUEST, RETURN_SUCCESS_REQUEST, RETURN_FAILURE_REQUEST };

function returnAction(actionType, payload) {
  return {
    type: actionType,
    payload,
  };
}

export default function executeReturn(username, bookid) {
  return async (dispatch) => {
    dispatch(returnAction(RETURN_START_REQUEST));
    try {
      const res = await returnService(username, bookid);
      if (!res) {
        dispatch(
          returnAction(RETURN_FAILURE_REQUEST, {
            msg: 'API response: Returning books failed',
          }),
        );
        return;
      }
      dispatch(returnAction(RETURN_SUCCESS_REQUEST, res));
    } catch (e) {
      dispatch(returnAction(RETURN_FAILURE_REQUEST, { msg: 'code error!' }));
      return;
    }
  };
}
