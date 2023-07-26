/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title() {
    return (
        <div>
            <h1 className="title">hello react title</h1>
            <strong>gooooooodd!!!!</strong>
        </div>
    );
}

console.log(Title());

render(<Title />, document.querySelector("#root"));