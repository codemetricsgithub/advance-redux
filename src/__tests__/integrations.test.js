import { mount } from "enzyme";
import React from "react";
import Root from "../Root";
import App from "../components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comment and display then", (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the FetchComments,button and clcik it
  wrapped.find(".fetch_comment_btn").simulate("click");
  moxios.wait(() => {
    setTimeout(() => {
      wrapped.update();
      expect(wrapped.find("li").length).toEqual(2);
    }, 100);
    done();
    wrapped.unmount();
  });
});
