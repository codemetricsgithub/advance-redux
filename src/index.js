import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
//components imported
import App from "./components/App";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <BrowserRouter>
     <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
