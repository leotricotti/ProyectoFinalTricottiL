import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { App } from "./App";
import { firebaseConfig } from "./constants";
import "firebase/auth";
import "./index.css";

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
