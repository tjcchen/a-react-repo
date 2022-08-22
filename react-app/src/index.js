import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import App from "./App";
// import App from './App2';
// import App from './App3';
// import App from './App4';
// import App from './App5';
// import App from "./App6";
// import App from './App7';
// import App from "./App8";
// import App from "./App9";
import App from "./App10";

const root = ReactDOM.createRoot(document.getElementById("root"));

// [Note] StrictMode will invoke useEffect twice
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// normal
root.render(<App />);

// react-redux
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
