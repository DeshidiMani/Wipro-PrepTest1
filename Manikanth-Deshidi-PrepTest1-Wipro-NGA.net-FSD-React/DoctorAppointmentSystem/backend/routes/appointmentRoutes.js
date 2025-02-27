// appointmentRoutes.js (Routes for Appointments)
const express = require("express");
const router = express.Router();

// Sample time slots (replace with database or logic if needed)
const availableTimes = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"];

router.get("/available-times", (req, res) => {
  try {
    res.json({ times: availableTimes });
  } catch (error) {
    res.status(500).json({ message: "Error fetching time slots" });
  }
});

module.exports = router;



