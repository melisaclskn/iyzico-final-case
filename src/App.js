import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import CardDetail from './components/CardDetail/index'
import Card from './components/Card/index'
import Home from './components/home'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/cardDetail/:id" element={<CardDetail />}>
            </Route>
            <Route path="/card" element={<Card />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
