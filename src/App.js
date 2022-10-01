import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getImg } from "./services/api";
import CardDetail from "./components/CardDetail/CardDetail";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import './styles/style.css'
function App() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    getImg().then((res) => {
      setImgData(res);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Cards imgData={imgData} />}></Route>
            <Route
              path="cardDetail/:id"
              element={<CardDetail imgData={imgData} />}
            ></Route>
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
