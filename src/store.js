import { createStore, applyMiddleware } from 'redux';
import getBookList from './reducers/bookList';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(getBookList, applyMiddleware(thunk));
// const store = createStore(getBookList, 
//     composeWithDevTools(
//         applyMiddleware(thunk),
// ));

export default store;