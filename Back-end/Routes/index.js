const express = require("express");
const router = express.Router();
const { User } = require("../Models/user");
// DB Init

router.get("/test", async (req, res) => {
  return res.status(200).send({ Result: "Working" });
});

module.exports = router;
