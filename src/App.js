import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import CardDetail from './components/CardDetail/index'
import Cards from './components/Cards/Cards'
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
            <Route path="/cards" element={<Cards />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
