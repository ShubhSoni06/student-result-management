const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enrollment: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  course: DataTypes.STRING,
  branch: DataTypes.STRING,
  currentSemester: DataTypes.INTEGER,
});

module.exports = Student;
