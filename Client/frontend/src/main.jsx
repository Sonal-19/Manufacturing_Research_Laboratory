import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../src/Redux/store.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx"; 
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import TestingFacilities from "./Pages/TestingFacilities.jsx";
import NewsEvents from "./Pages/NewsEvents.jsx";
import Contact from "./Pages/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<App></App>}></Route>
          <Route index element= {<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/testing' element={<TestingFacilities/>} />
          <Route path="/news-events" element={<NewsEvents/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </Provider>
  </React.StrictMode>
);
