const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`Time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
  console.log(`DATABASE_URL : ${DATABASE_URL}`);
});
