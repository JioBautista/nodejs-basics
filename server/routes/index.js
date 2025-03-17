require("dotenv").config();

const express = require("express");
const postgres = require("postgres");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const sql = postgres(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT * FROM products`;
  res.json(response);
});

module.exports = router;
