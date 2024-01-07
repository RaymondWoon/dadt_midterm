// I wrote all code

const sequelize = require("sequelize");

const getWeapon_TypeModel = (sequelize, DataTypes) => {
  const Weapon_Type = sequelize.define(
    "weapon_type",
    {
      weapon_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      weapon_type_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "weapon_type",
      timestamps: false,
    }
  );

  return Weapon_Type;
};

module.exports = getWeapon_TypeModel;