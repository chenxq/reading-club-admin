import borrowService from '../services/borrowService';

export const BUTTON_LABEL = 'BUTTON_LABEL';

const BORROW_START_REQUEST = 'BORROW_START_REQUEST';
const BORROW_SUCCESS_REQUEST = 'BORROW_SUCCESS_REQUEST';
const BORROW_FAILURE_REQUEST = 'BORROW_FAILURE_REQUEST';

export { BORROW_START_REQUEST, BORROW_SUCCESS_REQUEST, BORROW_FAILURE_REQUEST };

function borrowAction(actionType, payload) {
  return {
    type: actionType,
    payload,
  };
}

export default function executeBorrow(username, bookid) {
  return async (dispatch) => {
    dispatch(borrowAction(BORROW_START_REQUEST));
    try {
      const res = await borrowService(username, bookid);
      if (!res) {
        dispatch(
          borrowAction(BORROW_FAILURE_REQUEST, {
            msg: '该书已被借阅',
          }),
        );
        return;
      }
      dispatch(borrowAction(BORROW_SUCCESS_REQUEST, res));
    } catch (e) {
      dispatch(borrowAction(BORROW_FAILURE_REQUEST, { msg: '借书系统错误' }));
      return;
    }
  };
}
