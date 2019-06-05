import { GET_BOOK_LIST } from '../actions/getBookList';

const initialState = {
    // message: 'There is no books in your library!',
    bookListArray: []
};

export default function getBookList(state = initialState, action) {
    // const bookListArray = state.bookListArray;
    console.log('reducer', state, action);
    console.log('action type: ', action.type);
    switch(action.type) {
        case GET_BOOK_LIST:
            const newState = JSON.parse(JSON.stringify(state));
            newState.bookListArray=action.payload.bookListArray;
            console.log('reducer');
            return newState;
        default:
            return state;
    }
}