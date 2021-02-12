import { combineReducers } from "redux";
import CommentReducers from "./CommentReducers";

export default combineReducers({
  comments: CommentReducers,
});
