import { Pool } from "pg";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
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
  } catch (err) {
    console.error("DB ERROR:", err);
    return res.status(500).json({ error: "Failed to submit enquiry" });
  }
}
