import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM enquiries ORDER BY created_at DESC"
    );
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    return res.status(500).json({ error: "Failed to fetch enquiries" });
  }
}
