import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", doctor: "", time: "" });
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments/available-times")
      .then((res) => res.json())
      .then((data) => {
        setTimes(data.times);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching time slots:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  };

  return (
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="text" name="doctor" placeholder="Doctor's Name" onChange={handleChange} required />
        
        <select name="time" onChange={handleChange} required>
          <option value="">Select Time</option>
          {loading ? <option>Loading...</option> : times.map((time, index) => <option key={index} value={time}>{time}</option>)}
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default BookingForm;







