import postBook from '../services/postBook';

export const POST_BOOK = 'POST_BOOK';

const POST_BOOK_START = 'ADD_POST_BOOK_START';
const POST_BOOK_SUCCESS = 'ADD_POST_BOOK_SUCCESS';
const POST_BOOK_FAILURE = 'ADD_POST_BOOK_FAILURE';

export { POST_BOOK_START, POST_BOOK_SUCCESS, POST_BOOK_FAILURE, addBookAction };

function addBookAction(actionType) {
  return {
    type: actionType,
    payload: {},
  };
}

export default function addBook(data) {
  return async (dispatch) => {
    dispatch(addBookAction(POST_BOOK_START));
    try {
      const ret = await postBook(data);
      if (!ret) {
        dispatch(addBookAction(POST_BOOK_FAILURE, { msg: 'Something wrong!' }));
        return;
      }
      dispatch(addBookAction(POST_BOOK_SUCCESS, ret));
    } catch (e) {
      dispatch(addBookAction(POST_BOOK_FAILURE, { msg: 'Something wrong!' }));
      return;
    }
  };
}
