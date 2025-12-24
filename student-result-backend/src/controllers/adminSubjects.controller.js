const { Subject } = require("../models");

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const { name, credits } = req.body;

    if (!name || !credits) {
      return res
        .status(400)
        .json({ message: "Name and credits are required" });
    }

    const subject = await Subject.create({
      name,
      credits,
    });

    res.status(201).json(subject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create subject" });
  }
};
