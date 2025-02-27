import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../frontend/doctor-ui/src/pages/Home";
import Booking from "../../../frontend/doctor-ui/src/pages/Booking";
import Confirmation from "../../../frontend/doctor-ui/src/pages/Confirmation";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:doctorId" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;

