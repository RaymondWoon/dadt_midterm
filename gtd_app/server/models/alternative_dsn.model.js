// I wrote all code

const sequelize = require("sequelize");

const getAlternative_DsnModel = (sequelize, DataTypes) => {
  const Alternative_Dsn = sequelize.define(
    "alternative_dsn",
    {
      alternative_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      alternative_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "alternative_dsn",
      timestamps: false,
    }
  );

  return Alternative_Dsn;
};

module.exports = getAlternative_DsnModel;
