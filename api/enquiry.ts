import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    phone,
    email,
    destination,
    travelDate,
    travelers,
    message,
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO enquiries
       (full_name, phone, email, destination, travel_date, travelers, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [fullName, phone, email, destination, travelDate, travelers, message]
    );

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("INSERT ENQUIRY ERROR:", error);
    return res.status(500).json({ error: "Database error" });
  }
}
