import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "heaidng", abc: "alalal" },
  React.createElement("div", { id: "heaidng", abc: "alalal" }, [
    React.createElement("h1", { id: "heaidng", abc: "alalal" }, "Hellow"),
    React.createElement(
      "h1",
      { id: "heaidng", abc: "alalal" },
      "Im goutam waghfhffhfhe"
    ),
  ])
);
//React Element is nothing just a javascript object
// react can be small portion of our app
// order of file matters
console.log(heading);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
