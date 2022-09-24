import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import CardDetail from "./components/CardDetail/index";
import Cards from "./components/Cards/Cards";
import Home from "./components/home";
import "./App.css";

function App() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    axios.get("/db/data.json").then((res) => {
      console.log(res.data, "ress data");
      setImgData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/cardDetail/:id"
              element={<CardDetail imgData={imgData} />}
            ></Route>
            <Route path="/cards" element={<Cards />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
