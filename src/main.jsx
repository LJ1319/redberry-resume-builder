import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// TODO: MOVE TEXT_INPUT TO SEPARATE COMPONENT
// TODO: ADD SCHEMA(S) FOR VALIDATION
// TODO: ADD PROPER STYLINGS

// TODO: MAKE GITHUB REPO PUBLIC
// TODO: CLEAN UP FILES AND DIRECTORIES
