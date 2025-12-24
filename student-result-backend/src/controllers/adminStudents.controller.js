const { Student, User } = require("../models");
const bcrypt = require("bcrypt");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [{ model: User, attributes: ["email"] }],
    });
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, email, enrollment, course, branch, semester, password } =
      req.body;

    if (
      !name ||
      !email ||
      !enrollment ||
      !course ||
      !branch ||
      !semester ||
      !password
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      enrollment,
      course,
      branch,
      semester,
    });

    await User.create({
      email,
      passwordHash,
      role: "STUDENT",
      studentId: student.id,
    });

    res.status(201).json({ message: "Student created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Student creation failed" });
  }
};
