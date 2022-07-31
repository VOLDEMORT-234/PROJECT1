import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./components/hooks-store/products-store";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products-context";
configureStore();


ReactDOM.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvider>.
  document.getElementById("root")
);
