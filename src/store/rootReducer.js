import { combineReducers } from "redux";
import authReducer from "./authReducer";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
});

export default rootReducer;
