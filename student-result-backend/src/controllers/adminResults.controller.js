const { ResultStatus } = require("../models");

exports.publishResult = async (req, res) => {
  try {
    const { studentId, semester } = req.body;

    if (!studentId || !semester) {
      return res.status(400).json({ message: "studentId and semester required" });
    }

    const [record] = await ResultStatus.upsert({
      studentId,
      semester,
      isPublished: true,
    });

    res.json({ message: "Result published successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to publish result" });
  }
};
