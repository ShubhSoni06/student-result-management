const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Student = require("../models/Student");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  let studentId = null;
  let currentSemester = null;

  if (user.role === "STUDENT") {
    const student = await Student.findOne({
      where: { userId: user.id },
    });

    studentId = student.id;
    currentSemester = student.currentSemester;
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      studentId,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    user: {
      id: user.id,
      role: user.role,
      studentId,
      currentSemester,
    },
  });
};

module.exports = { login };
