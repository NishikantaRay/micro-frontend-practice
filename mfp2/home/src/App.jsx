import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Components/HeaderComp/Header.js";
import Content from "./Components/Content/Content";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <Content/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
