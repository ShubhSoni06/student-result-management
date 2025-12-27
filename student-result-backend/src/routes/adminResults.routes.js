const express = require("express");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const { publishResult } = require("../controllers/adminResults.controller");

const router = express.Router();

// Publish semester result
router.post(
  "/publish",
  authenticate,
  authorize(["ADMIN"]),
  publishResult
);

module.exports = router;
