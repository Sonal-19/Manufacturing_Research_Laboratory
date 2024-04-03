import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../src/Redux/store.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App></App>}></Route>
          <Route index element= {<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
