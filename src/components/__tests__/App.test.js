import { shallow } from "enzyme";
import React from "react";
import App from "../App";
// Imported components
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

 let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show the Comment  List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
