import { combineReducers } from 'redux';
import bookDetailReducer from './bookDetailReducer';

export default combineReducers({
  bookDetail: bookDetailReducer,
});
