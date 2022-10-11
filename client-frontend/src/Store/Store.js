import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// just for initializing the store
const Store = createStore(
  reducers,
  {},
  applyMiddleware(...[thunk]) // here i'm are using the thunk as middleware
);

export default Store;