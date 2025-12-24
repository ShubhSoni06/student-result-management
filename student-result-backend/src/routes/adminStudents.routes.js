const express = require("express");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const {
  getAllStudents,
  createStudent,
} = require("../controllers/adminStudents.controller");

const router = express.Router();

// GET all students (ADMIN only)
router.get(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  getAllStudents
);

// CREATE student (ADMIN only)
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  createStudent
);

module.exports = router;
