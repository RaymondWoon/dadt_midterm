// I wrote all code

const sequelize = require("sequelize");

const getTarget_TypeModel = (sequelize, DataTypes) => {
  const Target_Type = sequelize.define(
    "target_type",
    {
      target_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      target_type_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "target_type",
      timestamps: false,
    }
  );

  return Target_Type;
};

module.exports = getTarget_TypeModel;
