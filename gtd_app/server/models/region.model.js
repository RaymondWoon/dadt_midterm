// I wrote all code

const sequelize = require("sequelize");

const getRegionModel = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "region",
    {
      region_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      region_txt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "region",
      timestamps: false,
    }
  );

  Region.associate = (models) => {
    Region.hasMany(models.Country, {
      onDelete: "CASCADE",
      foreignKey: "region_id",
    });
  };

  return Region;
};

module.exports = getRegionModel;
