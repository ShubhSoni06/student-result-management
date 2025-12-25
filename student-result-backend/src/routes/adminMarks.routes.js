const express = require("express");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const { saveMarks } = require("../controllers/adminMarks.controller");

const router = express.Router();

// Save marks (ADMIN only)
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  saveMarks
);

module.exports = router;
