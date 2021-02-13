import CommentReducers from "../CommentReducers";
import { SAVE_COMMENT } from "../../actions/types";

it("handle action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = CommentReducers([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handle action  with unknown type ", () => {
 const newState= CommentReducers([], { type: "krihna" });
  expect(newState).toEqual([]);
});
