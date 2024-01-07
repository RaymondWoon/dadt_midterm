// I wrote all code

// Load models
const { models } = require("../models");
const Weapon_Subtype = models.Weapon_Subtype;

//const Region = require("../models/region.model");

// GET all regions
exports.getWeapon_Subtypes = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const weapon_subtypes = await Weapon_Subtype.findAll();
    console.log(weapon_subtypes);
    return res.status(200).json(weapon_subtypes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
