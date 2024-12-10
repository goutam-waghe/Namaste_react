import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Layout />);
