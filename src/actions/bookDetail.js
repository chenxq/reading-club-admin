import fetchBookDetail from '../services/bookDetail';
const START_REQUEST = 'START_REQUEST';
const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
const FAILURE_REQUEST = 'FAILURE_REQUEST';

export { START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST };

function action(type, payload) {
  return { type, payload };
}

export default function requesBookDetail(bookID) {
  return async (dispatch) => {
    dispatch(action(START_REQUEST));

    try {
      const ret = await fetchBookDetail(bookID);
      if (!ret) {
        dispatch(action(FAILURE_REQUEST, { msg: 'Something wrong!' }));
        return;
      }
      dispatch(action(SUCCESS_REQUEST, { ret }));
    } catch (e) {
      dispatch(action(FAILURE_REQUEST, { msg: 'Something wrong!' }));
      return;
    }
  };
}
