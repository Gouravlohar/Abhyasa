import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
// import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Exam from "./Pages/Exam";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Examportal from "./Components/Examportal";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/legal" element={<Legal />} /> */}
          <Route path="/exam" element={<Exam />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/examportal" element={<Examportal/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
