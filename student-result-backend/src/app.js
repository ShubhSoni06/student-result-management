const express = require("express");
const cors = require("cors");

const app = express();

/* ===== Middleware FIRST ===== */
app.use(cors());
app.use(express.json());

/* ===== Routes AFTER middleware ===== */
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const testRoutes = require("./routes/test.routes");
app.use("/api/test", testRoutes);

/* ===== Test route ===== */
app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

module.exports = app;
