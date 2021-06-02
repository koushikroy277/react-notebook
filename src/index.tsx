import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Context from "./context/Context";

ReactDOM.render(
  <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
