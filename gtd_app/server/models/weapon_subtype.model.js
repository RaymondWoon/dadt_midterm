// I wrote all code

const sequelize = require("sequelize");

const getWeapon_SubtypeModel = (sequelize, DataTypes) => {
  const Weapon_Subtype = sequelize.define(
    "weapon_subtype",
    {
      weapon_subtype_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      weapon_subtype_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "weapon_subtype",
      timestamps: false,
    }
  );

  return Weapon_Subtype;
};

module.exports = getWeapon_SubtypeModel;
