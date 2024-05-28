import { combineReducers } from "redux";
import toDoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: toDoReducer,
});

export default rootReducer;
