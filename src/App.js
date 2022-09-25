import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CardDetail from "./components/CardDetail/index";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/home";
import "./App.css";
import { getImg } from "./services/api";

function App() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    getImg().then((res) => {
      setImgData(res);
    });
  }, []);

  return (
    <div className="App">
      <SearchBar/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/cardDetail/:id"
              element={<CardDetail imgData={imgData} />}
            ></Route>
            <Route path="/cards" element={<Cards imgData={imgData} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
App.propTypes = {
  imgData: PropTypes.array,
};
export default App;
