import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import getBookList from './bookListReducer';
import getUserListReducer from './userReducer';
import addBookReducer from './addBookReducer';

import deleteBookReducer from './deleteBookReducer';
import authReducer from './authReducer';
import borrowReducer from './borrowReducer';


export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
  userList: getUserListReducer,
  addBook: addBookReducer,
<<<<<<< HEAD
  returnStatus: returnBookReducer,
=======
  deleteBookInfo: deleteBookReducer,
  auth: authReducer,
  borrowStatus: borrowReducer,
>>>>>>> origin/master
});
