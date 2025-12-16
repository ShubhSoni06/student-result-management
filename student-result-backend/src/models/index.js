const sequelize = require("../config/db");

const User = require("./User");
const Student = require("./Student");

// ===== Associations =====

// One User → One Student
User.hasOne(Student, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Student.belongsTo(User, {
  foreignKey: "userId",
});

// ========================

module.exports = {
  sequelize,
  User,
  Student,
};
