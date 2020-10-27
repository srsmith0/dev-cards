import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import topicReducer from "./topicReducer";
import focusReducer from "./focusReducer";

export default combineReducers({
  topics: topicReducer,
  cards: cardReducer,
  focus: focusReducer
});
