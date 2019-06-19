import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import getBookList from '../reducers/bookList';
import userReducer from './userReducer';
import addBookReducer from './addBookReducer';

export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
  userresponse: userReducer,
  addBook: addBookReducer,
});
