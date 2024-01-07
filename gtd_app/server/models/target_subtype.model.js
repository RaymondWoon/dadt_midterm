// I wrote all code

const sequelize = require("sequelize");

const getTarget_SubtypeModel = (sequelize, DataTypes) => {
  const Target_Subtype = sequelize.define(
    "target_subtype",
    {
      target_subtype_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      target_subtype_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "target_subtype",
      timestamps: false,
    }
  );

  return Target_Subtype;
};

module.exports = getTarget_SubtypeModel;
