const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ResultStatus = sequelize.define(
  "ResultStatus",
  {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "ResultStatuses",
    indexes: [
      {
        unique: true,
        fields: ["studentId", "semester"],
      },
    ],
  }
);

module.exports = ResultStatus;
