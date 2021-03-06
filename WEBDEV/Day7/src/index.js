import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthcontextProvider } from "./components/store/auth-context";

ReactDOM.render(
  <AuthcontextProvider>
    <App />
  </AuthcontextProvider>,
  document.getElementById("root")
);

// useEffect (() => {},[dependencies])
