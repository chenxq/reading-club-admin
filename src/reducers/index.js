import { combineReducers } from "redux";
import bookDetailReducer from "./bookDetailReducer";
import getBookList from '../reducers/bookList';

export default combineReducers({
  bookDetail: bookDetailReducer,
  bookList: getBookList,
})
