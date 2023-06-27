import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from './redux.store';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import Header from "./component/Header/headers";
import Admins from "./component/Admin/admins";
import Users from "./component/User/users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<Admins />} />
        <Route path="user" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
