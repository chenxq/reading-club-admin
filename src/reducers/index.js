import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import getBookList from './bookListReducer';
import getUserListReducer from './userReducer';
import addBookReducer from './addBookReducer';
import authReducer from './authReducer';

export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
  userList: getUserListReducer,
  addBook: addBookReducer,
  auth: authReducer,
});
