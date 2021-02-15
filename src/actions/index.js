import axios from "axios";
import { CHANGE_AUTH, FETCH_COMMENTS, SAVE_COMMENT } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
export function fetchComment() {
  const response = axios.get("https://ak-api-nodejs.herokuapp.com/api/getuser");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

// chsnge authentication
export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}
