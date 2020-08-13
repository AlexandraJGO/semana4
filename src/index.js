import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

import Routes from "./Routes";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  rootElement
);
