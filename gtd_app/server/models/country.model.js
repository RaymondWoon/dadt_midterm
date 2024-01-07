// I wrote all code

const sequelize = require("sequelize");

const getCountryModel = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "country",
    {
      country_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      country_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "country",
      timestamps: false,
    }
  );

  Country.associate = (models) => {
    Country.belongsTo(models.Region, { foreignKey: "region_id" });
  };

  return Country;
};

module.exports = getCountryModel;
