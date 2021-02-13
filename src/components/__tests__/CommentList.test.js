import { mount } from "enzyme";
import Root from "../../Root";
import CommentList from "../CommentList";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["comment 1", "comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it("create one li pr comment", () => {
  console.log(wrapped.find("li").length);
  expect(wrapped.find("li").length).toEqual(2);
  // toEqual (2) means total length of array is equal to 2
});

it("show the text for each comments", () => {
  //   console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
