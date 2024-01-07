// I wrote all code

// Load models
const { models } = require("../models");
const Target_Type = models.Target_Type;

//const Region = require("../models/region.model");

// GET all regions
exports.getTarget_Types = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const target_types = await Target_Type.findAll();
    console.log(target_types);
    return res.status(200).json(target_types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
