import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Signup from "./components/Signup";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/signup" element={<Signup />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
