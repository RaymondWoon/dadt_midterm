// I wrote all code

// Load models
const { models } = require("../models");
const Weapon_Type = models.Weapon_Type;

//const Region = require("../models/region.model");

// GET all regions
exports.getWeapon_Types = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const weapon_types = await Weapon_Type.findAll();
    console.log(weapon_types);
    return res.status(200).json(weapon_types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
