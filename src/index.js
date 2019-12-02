import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import "./index.css";
import App from "./App";
import root from "./reducers"; // default is index.js
import * as serviceWorker from "./serviceWorker";
import setAuthToken from './utils/setAuthToken';

const store = createStore(root, applyMiddleware(thunk));
const token = localStorage.getItem('jwToken');
if (token) {
  setAuthToken(token);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
