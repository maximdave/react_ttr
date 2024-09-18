import React from "react";
// import ReactDOM from "react-dom"; // Removed unused import
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./styles/index.css";

import { createRoot } from "react-dom/client"; // Add this import

const root = createRoot(document.getElementById("root")!); // Create a root
root.render( // Use the new render method
  <Provider store={store}>
    <App />
  </Provider>
);
