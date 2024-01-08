// I wrote all code

// Load models
const { models } = require("../models");
const Target_Subtype = models.Target_Subtype;

//const Region = require("../models/region.model");

// GET all regions
exports.getTarget_Subtypes = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const target_subtypes = await Target_Subtype.findAll();
    console.log(target_subtypes);
    return res.status(200).json(target_subtypes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};