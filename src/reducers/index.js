import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';
import userReducer from './userReducer';

export default combineReducers({
  bookDetail: bookDetailReducer,
  userresponse: userReducer,
});
