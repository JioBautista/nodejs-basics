const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "jiobautista__" });
});

module.exports = router;
