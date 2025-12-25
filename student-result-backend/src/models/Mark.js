const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Mark = sequelize.define(
  "Mark",
  {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    marks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    tableName: "Marks",
  }
);

module.exports = Mark;
