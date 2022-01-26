import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={configureStore}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
