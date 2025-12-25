const { Mark } = require("../models");

exports.saveMarks = async (req, res) => {
  try {
    const { studentId, semester, marks } = req.body;

    if (!studentId || !semester || !Array.isArray(marks)) {
      return res.status(400).json({ message: "Invalid payload" });
    }

    // Remove old marks for this student + semester
    await Mark.destroy({
      where: { studentId, semester },
    });

    // Insert new marks
    const records = marks.map((m) => ({
      studentId,
      subjectId: m.subjectId,
      semester,
      marks: m.marks,
    }));

    await Mark.bulkCreate(records);

    res.json({ message: "Marks saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save marks" });
  }
};
