const { Sequelize } = require("sequelize");

// load configuration
const config = require("../../config");

const getRegionModel = require("./region.model");
const getCountryModel = require("./country.model");
const getNationalityModel = require("./nationality.model");
const getTarget_TypeModel = require("./target_type.model");
const getTarget_SubtypeModel = require("./target_subtype.model");
const getWeapon_TypeModel = require("./weapon_type.model");
const getWeapon_SubtypeModel = require("./weapon_subtype.model");
const getAttack_TypeModel = require("./attack_type.model");
const getAlternative_DsnModel = require("./alternative_dsn.model");

const db = new Sequelize(config.db.name, config.db.user, config.db.pwd, {
  host: config.db.host,
  dialect: config.db.dialect,
  logging: false,
});

const models = {
  Region: getRegionModel(db, Sequelize),
  Country: getCountryModel(db, Sequelize),
  Nationality: getNationalityModel(db, Sequelize),
  Target_Type: getTarget_TypeModel(db, Sequelize),
  Target_Subtype: getTarget_SubtypeModel(db, Sequelize),
  Weapon_Type: getWeapon_TypeModel(db, Sequelize),
  Weapon_Subtype: getWeapon_SubtypeModel(db, Sequelize),
  Attack_Type: getAttack_TypeModel(db, Sequelize),
  Alternative_Dsn: getAlternative_DsnModel(db, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  db,
  models,
};
