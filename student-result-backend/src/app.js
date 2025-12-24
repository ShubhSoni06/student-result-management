const express = require("express");
const cors = require("cors");

const app = express();

/* ===== Middleware FIRST ===== */
app.use(cors());
app.use(express.json());

/* ===== Routes AFTER middleware ===== */
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const adminStudentsRoutes = require("./routes/adminStudents.routes");
app.use("/api/admin/students", adminStudentsRoutes);

const adminSubjectsRoutes = require("./routes/adminSubjects.routes");
app.use("/api/admin/subjects", adminSubjectsRoutes);

const testRoutes = require("./routes/test.routes");
app.use("/api/test", testRoutes);

/* ===== Test route ===== */
app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

module.exports = app;
