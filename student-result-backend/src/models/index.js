const sequelize = require("../config/db");

const User = require("./User");
const Student = require("./Student");
const Subject = require("./Subject"); // ✅ ADD THIS

const Mark = require("./Mark");

const ResultStatus = require("./ResultStatus");

// ===== Associations =====

// One User → One Student
User.hasOne(Student, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Student.belongsTo(User, {
  foreignKey: "userId",
});

Student.hasMany(Mark, { foreignKey: "studentId" });
Mark.belongsTo(Student, { foreignKey: "studentId" });

Subject.hasMany(Mark, { foreignKey: "subjectId" });
Mark.belongsTo(Subject, { foreignKey: "subjectId" });

Student.hasMany(ResultStatus, { foreignKey: "studentId" });
ResultStatus.belongsTo(Student, { foreignKey: "studentId" });

// ========================

module.exports = {
  sequelize,
  User,
  Student,
  Subject, // ✅ EXPORT THIS
  Mark,
  ResultStatus,
};