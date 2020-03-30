import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostBlock from "./components/PostBlock/PostBlock";

ReactDOM.render(
  <React.StrictMode>
    <PostBlock />
  </React.StrictMode>,
  document.getElementById("root")
);