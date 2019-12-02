import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import getBookList from './bookListReducer';
import getUserListReducer from './userReducer';
import addBookReducer from './addBookReducer';
import deleteBookReducer from './deleteBookReducer';
import authReducer from './authReducer';
import borrowReducer from './borrowReducer';
import returnReducer from './returnReducer';

export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
  userList: getUserListReducer,
  addBook: addBookReducer,
  deleteBookInfo: deleteBookReducer,
  auth: authReducer,
  borrowStatus: borrowReducer,
  returnStatus: returnReducer
});
