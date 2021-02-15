import { combineReducers } from "redux";
import CommentReducers from "./CommentReducers";
import auth from "./auth";

export default combineReducers({
  comments: CommentReducers,
  auth: auth,
});
