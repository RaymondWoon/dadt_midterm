// I wrote all code

// Load models
const { models } = require("../models");
const Attack_Type = models.Attack_Type;

//const Region = require("../models/region.model");

// GET all regions
exports.getAttack_Types = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const attack_types = await Attack_Type.findAll();
    console.log(attack_types);
    return res.status(200).json(attack_types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
