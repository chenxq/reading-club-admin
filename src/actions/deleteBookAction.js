import deleteBookService from '../services/deleteBookService';

const DELETE_BOOK_START = 'DELETE_BOOK_START';
const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';

export { DELETE_BOOK_START, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE };

function deleteBookAction(actionType, payload) {
  return {
    type: actionType,
    payload,
  };
}

export default function deleteBook(bookID) {
  return async (dispatch) => {
    dispatch(deleteBookAction(DELETE_BOOK_START));
    try {
      const ret = await deleteBookService(bookID);
      if (!ret) {
        dispatch(deleteBookAction(DELETE_BOOK_FAILURE, { msg: 'Something wrong!' }));
        return;
      }
      dispatch(deleteBookAction(DELETE_BOOK_SUCCESS, ret));
    } catch (e) {
      dispatch(deleteBookAction(DELETE_BOOK_FAILURE, { msg: 'Something wrong!' }));
      return;
    }
  };
}
