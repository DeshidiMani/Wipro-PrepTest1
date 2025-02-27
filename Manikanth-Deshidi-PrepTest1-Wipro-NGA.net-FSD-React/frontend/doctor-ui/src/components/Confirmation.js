import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, date, doctor } = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>Appointment Confirmed</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Doctor:</strong> {doctor}</p>
      <p>Your appointment is booked.</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Confirmation;

