/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hello react title"), createElement("strong", null, "gooooooodd!!!!"));
}

// console.log(Title());

render(createElement(Title, null), document.querySelector("#root"));