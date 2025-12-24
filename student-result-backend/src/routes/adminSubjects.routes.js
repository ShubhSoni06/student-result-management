const express = require("express");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const {
  getAllSubjects,
  createSubject,
} = require("../controllers/adminSubjects.controller");

const router = express.Router();

// GET all subjects (ADMIN only)
router.get(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  getAllSubjects
);

// CREATE subject (ADMIN only)
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  createSubject
);

module.exports = router;
