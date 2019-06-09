import { FAILURE_REQUEST, START_REQUEST, SUCCESS_REQUEST } from '../actions/getBookList';

const initialState = {
    loading: "init",
    bookListArray: []
};

export default function getBookList(state = initialState, action) {
    console.log('reducer', state, action);
    console.log('action type: ', action.type);
    switch(action.type) {
        case START_REQUEST: {
            return {loading: 'init'};
        }
        case SUCCESS_REQUEST: {
            return {
                ...state,
                ...action.payload
            };
        }
        case FAILURE_REQUEST: {
            return {
                ...state,
                loading: "failed"
            };
        }
        default:
            return state;
    }
}