import React from "react";
import ReactDOM from "react-dom/client";

//ReactcreateElement => (js object ) => root.render => Html
const Heading = React.createElement("h1", { id: "heading" }, "this is Haeding");
console.log(Heading);

// jsx - jsx is not part of react ! it is not html inside in js ! html like js syntax
//React Element
//it is not valid peor js
//this code transplid before the reaches js engine - it is done by babel

const Heading2 = (
  <h1 id="heading" className="heading" tabIndex={3}>
    this is Heading 2
  </h1>
);
console.log(Heading2);

// How this code is run
// jsx => React.createElement => js Object => html (render)

// React component
//functional component
//class based component
// function which is return react Element or Jsx
// component composition :- use component inside component
const promoseOne = new Promise();

function HeadingComponent() {
  return (
    <>
      <h1>Hellow these !!!!</h1>
      <h1 style={{ color: "red" }}>{name}</h1>
      <Title />
      <Component1 />
    </>
  );
}

const Title = () => {
  return <h1>Namaste JavaScript 🚀</h1>;
};
const reactElm = (
  <div>
    <h1>{name}</h1>
    <Title />
    {Title()}
  </div>
);
const Component1 = () => <h1>this is component 1⭐</h1>;
// <HeadingComponent />
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(reactElm); //it is replace the exiting html
