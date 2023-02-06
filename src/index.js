import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Experience from "./Components/Dashboard/Experience";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Dashboard/Profile";
import Education from "./Components/Dashboard/Education";
import Posts from "./Components/Dashboard/Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Education /> */}
      {/* <Dashboard /> */}
      {/* <Posts /> */}
      {/* <Profile /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
