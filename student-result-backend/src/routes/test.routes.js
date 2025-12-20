const express = require("express");
const { authenticate, authorize } = require("../middleware/auth.middleware");

const router = express.Router();

// Any logged-in user
router.get(
  "/protected",
  authenticate,
  (req, res) => {
    res.json({
      message: "Access granted",
      user: req.user,
    });
  }
);

// Admin-only
router.get(
  "/admin-only",
  authenticate,
  authorize(["ADMIN"]),
  (req, res) => {
    res.json({ message: "Admin access granted" });
  }
);

module.exports = router;
