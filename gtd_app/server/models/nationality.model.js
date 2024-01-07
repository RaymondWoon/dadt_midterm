// I wrote all code

const sequelize = require("sequelize");

const getNationalityModel = (sequelize, DataTypes) => {
  const Nationality = sequelize.define(
    "nationality",
    {
      nationality_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      nationality_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "nationality",
      timestamps: false,
    }
  );

  return Nationality;
};

module.exports = getNationalityModel;
