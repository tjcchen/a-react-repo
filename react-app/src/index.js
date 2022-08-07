import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from './App2';
// import App from './App3';
// import App from './App4';
import App from './App5';

const root = ReactDOM.createRoot(document.getElementById("root"));

// [Note] StrictMode will invoke useEffect twice
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <App />
);
