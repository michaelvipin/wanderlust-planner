export default function handler(req: any, res: any) {
  res.status(200).json({
    hasDatabaseUrl: !!process.env.DATABASE_URL,
    databaseUrlStartsWith: process.env.DATABASE_URL
      ? process.env.DATABASE_URL.slice(0, 15)
      : null,
  });
}
