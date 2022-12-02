import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { App } from "./App";
import { firebaseConfig } from "./constants";
import "./index.css";

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

