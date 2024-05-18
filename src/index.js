import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/store";
import "./css/grid.css";
import "./css/index.css";
import SnackBar from "./components/snackbar/SnackBar";


// console.log(app);
document.title = "MSs";
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <SnackBar message={`Nouveau client ajouter`} />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
