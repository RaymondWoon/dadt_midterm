// I wrote all code

const sequelize = require("sequelize");

const getAttack_TypeModel = (sequelize, DataTypes) => {
  const Attack_Type = sequelize.define(
    "attack_type",
    {
      attack_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      attack_type_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "attack_type",
      timestamps: false,
    }
  );

  return Attack_Type;
};

module.exports = getAttack_TypeModel;
