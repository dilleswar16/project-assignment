import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";

// this will combine all reducers by key name
export default combineReducers({
  getData: getDataReducer,
});