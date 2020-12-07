// Server side store creation
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from '../client/reducers';
import axios from "axios";
export default (req) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};