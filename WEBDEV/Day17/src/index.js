import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // this will activate React router feature
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
