import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers";
import { App } from "./App";
import { Provider } from "react-redux";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
