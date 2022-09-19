// import logo from './logo.svg';
// import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./Profiles";
function App() {
  return (
    <div className="App">
      <Router>
        <h1>hello</h1>
        <Routes>
          <Route exact path="/" element={<Profiles/>}>
            {/* <Profiles /> */}
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
