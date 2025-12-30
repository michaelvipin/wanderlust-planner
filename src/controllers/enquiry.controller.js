import { pool } from "../db/index.js";

export const createEnquiry = async (req, res) => {
  const {
    fullName,
    phone,
    email,
    destination,
    travelDate,
    travelers,
    message,
  } = req.body;

  if (!fullName || !phone || !email || !destination) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  try {
    await pool.query(
      `INSERT INTO enquiries 
      (full_name, phone, email, destination, travel_date, travelers, message)
      VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [fullName, phone, email, destination, travelDate, travelers, message]
    );

    res.status(201).json({ success: true, message: "Enquiry saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
