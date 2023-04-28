import { combineReducers } from "redux";
import globalData from "./StateReducer/GlobalReducer";
const rootReducer = combineReducers({
  globalData,
});
export default rootReducer;
