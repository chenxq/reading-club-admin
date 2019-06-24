import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import getBookList from './bookListReducer';
import userReducer from './userReducer';
import addBookReducer from './addBookReducer';
import returnBookReducer from './returnBookReducer';


export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
  userresponse: userReducer,
  addBook: addBookReducer,
  returnStatus: returnBookReducer,
});
