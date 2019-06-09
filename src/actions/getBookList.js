import axios from 'axios';

export const GET_BOOK_LIST = 'GET_BOOK_LIST';

const START_REQUEST = 'START_REQUEST';
const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
const FAILURE_REQUEST = 'FAILURE_REQUEST';

export {START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST};


function bookList(actionType, bookListArray={}){
    return {
        type: actionType,
        payload: { bookListArray }
    }
}

export default function getBookList() {
    return dispatch => {
        dispatch(bookList(START_REQUEST));
        axios
            .get('https://reading-club-backend.herokuapp.com/books')
            .then(res => {
                var list = res.data.message;
                console.log('------>', list);
                dispatch(bookList(SUCCESS_REQUEST, list));
            })
            .catch(error => {
                dispatch(bookList(FAILURE_REQUEST, error));
            });
    };
}